import { TELEGRAM_TOKEN, TELEGRAM_CHANNEL } from '@/config/env';
const TelegramLogger = require('node-telegram-logger');
let telegramLogger = new TelegramLogger(TELEGRAM_TOKEN, TELEGRAM_CHANNEL);
export { telegramLogger };
