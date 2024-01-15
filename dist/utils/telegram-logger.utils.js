"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramLogger = void 0;
const env_1 = require("../config/env");
const TelegramLogger = require('node-telegram-logger');
let telegramLogger = new TelegramLogger(env_1.TELEGRAM_TOKEN, env_1.TELEGRAM_CHANNEL);
exports.telegramLogger = telegramLogger;
//# sourceMappingURL=telegram-logger.utils.js.map