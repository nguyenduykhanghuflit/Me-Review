"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const movie_controller_1 = tslib_1.__importDefault(require("../controllers/movie.controller"));
class MoviesRoute {
    constructor() {
        this.path = '/api/v1/movies';
        this.router = (0, express_1.Router)();
        this.movieController = new movie_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.movieController.getMoviesByCategory);
        this.router.get(`${this.path}/:id`, this.movieController.getMovieDetail);
        this.router.post(`${this.path}`, this.movieController.createMovie);
        this.router.post(`${this.path}/multi`, this.movieController.createMulti);
        this.router.put(`${this.path}/:id`, this.movieController.updateMovie);
        this.router.put(`/movies/update`, this.movieController.updateMulti);
        this.router.get(`/movies/dev`, this.movieController.dev);
        //   this.router.delete(
        //      `${this.path}/:id(\\d+)`,
        //      this.usersController.deleteUser
        //   );
    }
}
exports.default = MoviesRoute;
//# sourceMappingURL=movie.router.js.map