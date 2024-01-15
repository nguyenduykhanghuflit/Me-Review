"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const exception_utils_1 = require("../utils/exception.utils");
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true) => {
    return (req, res, next) => {
        (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted,
        }).then((errors) => {
            if (errors.length > 0) {
                const message = errors
                    .map((error) => Object.values(error.constraints))
                    .join(', ');
                next(new exception_utils_1.HttpException(400, message));
            }
            else {
                next();
            }
        });
    };
};
exports.default = validationMiddleware;
//# sourceMappingURL=validation.middleware.js.map