"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const genre_controller_1 = tslib_1.__importDefault(require("../controllers/genre.controller"));
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
const genre_dto_1 = require("../dtos/genre.dto");
class GenreRoute {
    constructor() {
        this.path = '/api/v1/genres';
        this.router = (0, express_1.Router)();
        this.genresController = new genre_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.genresController.get);
        this.router.post(`${this.path}`, (0, validation_middleware_1.default)(genre_dto_1.CreateGenreDto, 'body', true), this.genresController.create);
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
exports.default = GenreRoute;
//# sourceMappingURL=genre.route.js.map