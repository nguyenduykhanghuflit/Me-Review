"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const _config_1 = require("@config");
const connectMySQL_1 = tslib_1.__importDefault(require("@/databases/connectMySQL"));
const HttpException_1 = require("@exceptions/HttpException");
const authMiddleware = async (req, res, next) => {
    try {
        const Authorization = req.cookies['Authorization'] ||
            (req.header('Authorization')
                ? req.header('Authorization').split('Bearer ')[1]
                : null);
        if (Authorization) {
            const secretKey = _config_1.SECRET_KEY;
            const verificationResponse = (0, jsonwebtoken_1.verify)(Authorization, secretKey);
            const userId = verificationResponse.id;
            const findUser = await connectMySQL_1.default.Users.findByPk(userId);
            if (findUser) {
                req.user = findUser;
                next();
            }
            else {
                next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
            }
        }
        else {
            next(new HttpException_1.HttpException(404, 'Authentication token missing'));
        }
    }
    catch (error) {
        next(new HttpException_1.HttpException(401, 'Wrong authentication token'));
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map