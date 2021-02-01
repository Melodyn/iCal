import 'core-js';
import './index.css';
import vkBridgeDev from '@vkontakte/vk-bridge-mock';
import vkBridgeProd from '@vkontakte/vk-bridge';
import Rollbar from 'rollbar';

const bridgeProd = vkBridgeProd.default;
const bridgeDev = vkBridgeDev.default;

class AppError extends Error {
  constructor(originalError, params) {
    super();
    this.name = originalError.name;
    this.stack = originalError.stack;
    this.params = params;
    this.message = `${originalError.message}, params: ${JSON.stringify(params, null, 2)}`;
  }
}

const setApp = (bridge, logger) => {
  const requestSetup = () => bridge
    .send('VKWebAppAddToCommunity')
    .then(({ group_id }) => group_id)
    .catch((err) => {
      logger.error(new AppError(err, {
        source: 'VKWebAppAddToCommunity',
        page: gon.app.page,
        query: gon.app.query,
        originalError: JSON.stringify(err),
      }));

      return null;
    });

  const setAppButton = document.querySelector('#setApp');
  const openAppButton = document.querySelector('#openClub');

  setAppButton.addEventListener('click', async () => {
    const clubId = await requestSetup();

    if (clubId) {
      const currentHref = openAppButton.getAttribute('href');
      openAppButton.setAttribute('href', `${currentHref}_-${clubId}`);

      const currentVisibleBlock = document.querySelector('.d-block');
      const currentInvisibleBlock = document.querySelector('.d-none');

      currentVisibleBlock.classList.remove('d-block');
      currentVisibleBlock.classList.add('d-none');
      currentInvisibleBlock.classList.remove('d-none');
      currentInvisibleBlock.classList.add('d-block');
    }
  });
};

const setToken = (bridge, logger) => {
  if (!gon.user.isAdmin) return;

  const requestWidgetToken = () => bridge
    .send('VKWebAppGetCommunityToken', {
      app_id: gon.user.appId,
      group_id: gon.user.groupId,
      scope: 'app_widget',
    })
    .then(({ access_token }) => access_token)
    .catch((err) => {
      logger.error(new AppError(err, {
        source: 'VKWebAppGetCommunityToken',
        page: gon.app.page,
        query: gon.app.query,
        originalError: JSON.stringify(err),
      }));

      return null;
    });

  const { adminForm } = document.forms;
  const widgetTokenField = adminForm.elements.widgetToken;

  const setWidgetButton = document.querySelector('#setWidget');

  setWidgetButton.addEventListener('click', async () => {
    const token = await requestWidgetToken();
    if (token) {
      widgetTokenField.setAttribute('value', token);
      adminForm.requestSubmit();
    }
  });
};

const handlerByPages = {
  install: [setApp],
  calendar: [setToken],
};

const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

const init = (bridge, logger) => {
  bridge.send('VKWebAppInit');

  const currentPage = gon.app.page;
  if (!has(handlerByPages, currentPage)) return;

  const pageHandlers = handlerByPages[currentPage];
  pageHandlers.forEach((handler) => handler(bridge, logger));
};

document.addEventListener('DOMContentLoaded', () => {
  const bridge = gon.app.isProd ? bridgeProd : bridgeDev;
  const rollbar = new Rollbar({
    enabled: gon.app.isProd,
    accessToken: gon.app.rollbarToken,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: `${gon.app.env}-front`,
    },
  });

  init(bridge, rollbar);
});
