"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMySQL = void 0;
const tslib_1 = require("tslib");
const sequelize_1 = tslib_1.__importDefault(require("sequelize"));
const _config_1 = require("../config");
const users_model_1 = tslib_1.__importDefault(require("../models/users.model"));
const logger_1 = require("../utils/logger");
const telegramLogger_1 = require("../utils/telegramLogger");
const sequelize = new sequelize_1.default.Sequelize(_config_1.DB_DATABASE, _config_1.DB_USER, _config_1.DB_PASSWORD, {
    dialect: 'mysql',
    host: _config_1.DB_HOST,
    port: _config_1.DB_PORT,
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
    logQueryParameters: _config_1.NODE_ENV === 'development',
    logging: false,
    //  logging: (query, time) => {
    //     // logger.info(time + 'ms' + ' ' + query);
    //     telegramLogger.sendMessage(time + 'ms' + ' ' + query, 'INFO');
    //  },
    benchmark: true,
});
const connectMySQL = async () => {
    try {
        await sequelize.authenticate();
        logger_1.logger.info(`✅✅✅✅✅✅✅✅ Connect database success✅✅✅✅✅✅✅✅`);
        telegramLogger_1.telegramLogger.sendMessage('✅✅✅✅ Connect database success ✅✅✅✅', 'NOTICE');
    }
    catch (error) {
        telegramLogger_1.telegramLogger.sendMessage('⚠️⚠️⚠️⚠️⚠️ Kết nối CSDL thất bại: ⚠️⚠️⚠️⚠️' + error.message, 'ERROR');
    }
};
exports.connectMySQL = connectMySQL;
const initMysql = {
    Users: (0, users_model_1.default)(sequelize),
    sequelize,
    Sequelize: // connection instance (RAW queries)
    sequelize_1.default, // library
};
exports.default = initMysql;
//# sourceMappingURL=connectMySQL.js.map