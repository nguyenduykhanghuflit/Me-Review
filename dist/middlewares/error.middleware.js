"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { logger } from '../utils/logger';
const telegramLogger_1 = require("../utils/telegramLogger");
const errorMiddleware = (error, req, res, next) => {
    try {
        // const status: number = error.status || 500;
        const status = 200;
        const message = error.message || 'Something went wrong';
        // logger.error(
        //    `❗❗❗❗❗ [${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message} ❗❗❗❗❗`
        // );
        telegramLogger_1.telegramLogger.sendMessage(`❗❗❗❗❗ [${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message} ❗❗❗❗❗`);
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