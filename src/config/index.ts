import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'production'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';

export const {
   NODE_ENV,
   PORT,
   DB_HOST,
   DB_PORT,
   DB_USER,
   DB_PASSWORD,
   DB_DATABASE,
   SECRET_KEY,
   LOG_FORMAT,
   LOG_DIR,
   ORIGIN,
   TELEGRAM_TOKEN,
   TELEGRAM_CHANNEL,
   MONGODB_URI,
} = process.env;
