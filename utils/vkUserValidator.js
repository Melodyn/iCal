import qs from 'querystring';
import crypto from 'crypto';
import errors from './errors.cjs';

const { AuthError } = errors;

const removePrefix = (text, prefix = 'vk_') => text.split(prefix).filter((x) => x).join('');

const camelize = (text, separator = '_') => {
  const [firstWord, ...tail] = text.split(separator);
  const camelizedTail = tail.map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);

  return [firstWord, ...camelizedTail].join('');
};

const numberify = (value) => {
  const parsed = parseFloat(value);
  return Number.isNaN(parsed) ? value : parsed;
};

const createError = (message, params) => ((message === null)
  ? null
  : new AuthError(message, params));

const validationResult = ({ error = null, user = null, params = {} }) => ({
  isValid: (error === null),
  user,
  error: createError(error, params),
});

export const buildSign = (query, secret) => {
  const vkQueryParams = Object.fromEntries(
    Object.entries(query)
      .filter(([key]) => key.startsWith('vk_'))
      .sort(),
  );

  return crypto
    .createHmac('sha256', secret)
    .update(qs.stringify(vkQueryParams))
    .digest()
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=$/, '');
};

export const createValidator = (secret) => (request) => {
  const { query = {} } = request;
  const vkSign = query.sign;
  if (!vkSign) return validationResult({ error: 'Required parameter "sign" is missing', params: request.query });

  const queryParamsSign = buildSign(query, secret);

  if (vkSign !== queryParamsSign) {
    return validationResult({
      error: 'Incorrect sign',
      params: query,
    });
  }

  const userParams = Object.fromEntries(
    Object.entries(query)
      .filter(([key]) => key.startsWith('vk_'))
      .map(([key, value]) => [removePrefix(key), numberify(value)])
      .map(([key, value]) => [camelize(key), value]),
  );

  const user = {
    ...userParams,
    isAdmin: (userParams.viewerGroupRole === 'admin'),
  };

  return validationResult({ user });
};