"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const movie_service_1 = tslib_1.__importDefault(require("../services/movie.service"));
class MovieController {
    constructor() {
        this.movieService = new movie_service_1.default();
        this.getMoviesByCategory = async (req, res, next) => {
            try {
                const pageNumber = Number(req.query.pageNumer || 1);
                const pageSizeQuery = req.query.pageSize;
                const pageSize = !pageSizeQuery ||
                    Number(pageSizeQuery) <= 0 ||
                    Number(pageSizeQuery) > 20
                    ? 20
                    : Number(pageSizeQuery);
                const filters = [
                    { type: 'category', value: req.query.category },
                    {
                        type: 'productionYear',
                        value: req.query.productionYear,
                    },
                    { type: 'status', value: req.query.status },
                ];
                const movieFilter = {
                    page: pageNumber,
                    pageSize,
                    filters,
                };
                const movies = await this.movieService.findMovies(movieFilter);
                res.status(200).json({
                    data: movies,
                    message: 'Get movies  success',
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.createMovie = async (req, res, next) => {
            try {
                const createMovieDto = req.body;
                const movie = await this.movieService.createMovie(createMovieDto);
                res.status(200).json({
                    data: movie,
                    message: 'Create movie success',
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateMovie = async (req, res, next) => {
            try {
                const movieId = req.params.movieId;
                const updateMovieDto = req.body;
                const movie = await this.movieService.updateMovie(movieId, updateMovieDto);
                res.status(200).json({
                    data: movie,
                    message: 'Update movie success',
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = MovieController;
//# sourceMappingURL=movie.controller.js.map