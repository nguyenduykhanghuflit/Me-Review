import Sequelize from 'sequelize';
import {
   NODE_ENV,
   DB_HOST,
   DB_PORT,
   DB_USER,
   DB_PASSWORD,
   DB_DATABASE,
} from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import { telegramLogger } from '@utils/telegramLogger';
const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
   dialect: 'mysql',
   host: DB_HOST,
   port: DB_PORT as any,
   timezone: '+07:00',
   define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
      underscored: true,
      freezeTableName: true,
   },
   pool: {
      min: 0,
      max: 5,
   },
   logQueryParameters: NODE_ENV === 'development',
   logging: false,
   //  logging: (query, time) => {
   //     // logger.info(time + 'ms' + ' ' + query);
   //     telegramLogger.sendMessage(time + 'ms' + ' ' + query, 'INFO');
   //  },
   benchmark: true,
});

export const connectMySQL = async () => {
   try {
      await sequelize.authenticate();
      logger.info(`✅✅✅✅✅✅✅✅ Connect database success✅✅✅✅✅✅✅✅`);
      telegramLogger.sendMessage(
         '✅✅✅✅ Connect database success ✅✅✅✅',
         'NOTICE'
      );
   } catch (error) {
      telegramLogger.sendMessage(
         '⚠️⚠️⚠️⚠️⚠️ Kết nối CSDL thất bại: ⚠️⚠️⚠️⚠️' + error.message,
         'ERROR'
      );
   }
};

const initMysql = {
   Users: UserModel(sequelize),
   sequelize, // connection instance (RAW queries)
   Sequelize, // library
};

export default initMysql;
