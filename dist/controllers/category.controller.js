"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const category_repositories_1 = tslib_1.__importDefault(require("../databases/repositories/category.repositories"));
class CategoriesController {
    constructor() {
        this.categoryRepository = new category_repositories_1.default();
        this.getCategories = async (req, res, next) => {
            try {
                // const userId = Number(req.params.id);
                // const userData: CreateUserDto = req.body;
                const findAllCategory = await this.categoryRepository.Get();
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: findAllCategory,
                    message: 'Get data success',
                });
            }
            catch (error) {
                return next(error);
            }
        };
        this.createCategory = async (req, res, next) => {
            try {
                // const userId = Number(req.params.id);
                const body = req.body;
                const data = await this.categoryRepository.Create(body);
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: data,
                    message: 'Get data success',
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=category.controller.js.map