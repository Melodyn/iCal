# ical

[![Maintainability](https://api.codeclimate.com/v1/badges/e23f92e76fd6a091df61/maintainability)](https://codeclimate.com/github/Melodyn/ical/maintainability)
[![Production CI](../../workflows/Production%20CI/badge.svg)](../../actions?query=workflow%3A"Production+CI")
[![Staging CI](../../workflows/Staging%20CI/badge.svg)](../../actions?query=workflow%3A"Staging+CI")

|![логотип](./logo.png)|Google-календарь и виджет в сообщество ВКонтакте.
|---|---|

Ссылки:
* стримы с разработкой: https://www.youtube.com/playlist?list=PLxqZB2PTPdc7RSb5QpFR1lJ27NEmHtaYa
* бэкенд приложения: https://melodyn-ical.herokuapp.com/
* приложение в vk: https://vk.com/app7703913

## Установка и запуск

Требования:
* Node.js >= 14;
* npm >= 6.14;
* (опционально) make >= 4;
* (опционально) docker >= 20;
* (опционально) heroku >= 7.47.

Разворачивание:
* Клонировать этот репозиторий;
* `make setup` для установки первый раз.

Использование
* `make run` запуск приложения;
* **или** `make run-heroku` для запуска как хероку-приложения.

Ещё команды:
* `make test` - запустить тесты;
* `make lint` - запустить линтер;
* `container-setup` - установка и запуск в docker-контейнере.
* `container-run` - запуск docker-контейнера с приложением. Далее - `make run` внутри контейнера.


### Как это работает

`make setup` запустит установку зависимостей, из example-конфига создаст девелоперский конфиг и запустит с ним приложение.


## Права

Исходный код и стримы с разработкой приложения являются частью демонстрации экосистемы JavaScript, её сложностей, особенностей и возможных подходов к разработке. Исходный код распространяется под лицензией [GNU GPLv3](./LICENSE.txt). Использование кода без согласования с автором запрещено. 
