"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res, next) => {
            try {
                res.send({
                    code: 200,
                    msg: '🚀 Hello KhangNguyen 🚀',
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = IndexController;
//# sourceMappingURL=index.controller.js.map