"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
// import { logger } from '@utils/logger';
const telegram_logger_utils_1 = require("../utils/telegram-logger.utils");
const env_1 = require("../config/env");
//connect mongoose
const connectMongoDb = () => {
    mongoose
        .connect(env_1.MONGODB_URI, {
        dbName: 'me_review',
    })
        .then(() => {
        // logger.info(
        //    `✅✅✅✅✅✅✅✅ Connect MongoDB success✅✅✅✅✅✅✅✅`
        // );
        telegram_logger_utils_1.telegramLogger.sendMessage('✅✅✅✅ Connect MongoDB success ✅✅✅✅', 'NOTICE');
    })
        .catch((error) => {
        telegram_logger_utils_1.telegramLogger.sendMessage('⚠️⚠️⚠️⚠️⚠️ Connect MongoDB failed: ⚠️⚠️⚠️⚠️' + error.message, 'ERROR');
    });
};
//tạo ra các model lần đầu tiên
//import models from '@schemas/index.schema'; // Import danh sách các mô hình
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