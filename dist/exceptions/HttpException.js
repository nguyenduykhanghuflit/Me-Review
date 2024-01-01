"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message, result) {
        super(message);
        this.status = status;
        this.message = message;
        this.result = result || null;
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=HttpException.js.map