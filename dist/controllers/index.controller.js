"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.index = (req, res, next) => {
            try {
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: '🚀 Hello World 🚀',
                    message: '🚀 Develop by KhangNguyen 🚀',
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