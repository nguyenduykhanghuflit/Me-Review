"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const category_controller_1 = tslib_1.__importDefault(require("../controllers/category.controller"));
const categories_dto_1 = require("../core/dtos/categories.dto");
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
class CategoriesRoute {
    constructor() {
        this.path = '/api/v1/categories';
        this.router = (0, express_1.Router)();
        this.categoriesController = new category_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.categoriesController.getCategories);
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(categories_dto_1.CreateCategoryDto, 'body', true), this.categoriesController.createCategory);
        //   this.router.put(
        //      `${this.path}/:id(\\d+)`,
        //      validationMiddleware(CreateUserDto, 'body', true),
        //      this.usersController.updateUser
        //   );
        //   this.router.delete(
        //      `${this.path}/:id(\\d+)`,
        //      this.usersController.deleteUser
        //   );
    }
}
exports.default = CategoriesRoute;
//# sourceMappingURL=categories.route.js.map