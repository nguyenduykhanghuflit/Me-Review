"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const logger_1 = require("../utils/logger");
const telegramLogger_1 = require("../utils/telegramLogger");
const _config_1 = require("../config");
//connect mongoose
const connectMongoDb = () => {
    mongoose
        .connect(_config_1.MONGODB_URI, {
        dbName: 'me_review',
    })
        .then(() => {
        logger_1.logger.info(`✅✅✅✅✅✅✅✅ Connect MongoDB success✅✅✅✅✅✅✅✅`);
        telegramLogger_1.telegramLogger.sendMessage('✅✅✅✅ Connect MongoDB success ✅✅✅✅', 'NOTICE');
    })
        .catch((error) => {
        telegramLogger_1.telegramLogger.sendMessage('⚠️⚠️⚠️⚠️⚠️ Connect MongoDB failed: ⚠️⚠️⚠️⚠️' + error.message, 'ERROR');
    });
};
//tạo ra các model lần đầu tiên
//import models from '../schemas/index.schema'; // Import danh sách các mô hình
// for (const modelName in models) {
//    if (Object.hasOwnProperty.call(models, modelName)) {
//       const Model = models[modelName];
//       Model.createCollection()
//          .then(() => {
//             console.log(
//                `Collection for model ${modelName} created successfully.`
//             );
//          })
//          .catch((error) => {
//             console.error(
//                `Error creating collection for model ${modelName}:`,
//                error
//             );
//          });
//    }
// }
exports.default = connectMongoDb;
//# sourceMappingURL=connectMongoDb.js.map