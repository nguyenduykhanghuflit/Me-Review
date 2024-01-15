"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { logger } from '@utils/logger';
const telegram_logger_utils_1 = require("../utils/telegram-logger.utils");
const errorMiddleware = (error, req, res, next) => {
    try {
        // const status: number = error.status || 500;
        const status = 200;
        const message = error.message || 'Something went wrong';
        // logger.error(
        //    `❗❗❗❗❗ [${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message} ❗❗❗❗❗`
        // );
        telegram_logger_utils_1.telegramLogger.sendMessage(`❗❗❗❗❗ [${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message} ❗❗❗❗❗`);
        res.status(status).json({
            success: false,
            code: status,
            message,
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map