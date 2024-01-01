"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const category_service_1 = tslib_1.__importDefault(require("../services/category.service"));
class CategoriesController {
    constructor() {
        this.categoryService = new category_service_1.default();
        this.getCategories = async (req, res, next) => {
            try {
                // const userId = Number(req.params.id);
                // const userData: CreateUserDto = req.body;
                const findAllCategory = await this.categoryService.findAllCategory();
                res.status(200).json({
                    data: findAllCategory,
                    message: 'Get data success',
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.createCategory = async (req, res, next) => {
            try {
                // const userId = Number(req.params.id);
                const body = req.body;
                const data = await this.categoryService.createCategrory(body);
                res.status(200).json({
                    data: data,
                    message: 'Create Success',
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