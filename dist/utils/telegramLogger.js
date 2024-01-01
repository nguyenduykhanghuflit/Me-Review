"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramLogger = void 0;
const _config_1 = require("../config");
const TelegramLogger = require('node-telegram-logger');
let telegramLogger = new TelegramLogger(_config_1.TELEGRAM_TOKEN, _config_1.TELEGRAM_CHANNEL);
exports.telegramLogger = telegramLogger;
//# sourceMappingURL=telegramLogger.js.map