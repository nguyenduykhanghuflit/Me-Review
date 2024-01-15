"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const movie_repositories_1 = tslib_1.__importDefault(require("../databases/repositories/movie.repositories"));
class MovieController {
    constructor() {
        this.movieRepository = new movie_repositories_1.default();
        this.dev = async (req, res, next) => {
            const data = await this.movieRepository.Dev();
            return res.status(200).json({
                success: true,
                code: 200,
                data: data,
                message: 'Get movies success',
            });
        };
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
                    { type: 'keyword', value: req.query.keyword },
                    { type: 'genre', value: req.query.genre },
                ];
                const movieFilter = {
                    page: pageNumber,
                    pageSize,
                    filters,
                };
                const movies = await this.movieRepository.Get(movieFilter);
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: movies,
                    message: 'Get movies success',
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.getMovieDetail = async (req, res, next) => {
            try {
                const movieId = req.params.id;
                var data = await this.movieRepository.GetDetail(movieId);
                return res.status(200).json({
                    success: true,
                    code: data ? 200 : 404,
                    data: data,
                    message: data ? 'Get movie success' : 'Not found',
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.createMovie = async (req, res, next) => {
            try {
                const createMovieDto = req.body;
                const movie = await this.movieRepository.Create(createMovieDto);
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: movie,
                    message: 'Create movie success',
                });
            }
            catch (error) {
                return next(error);
            }
        };
        this.createMulti = async (req, res, next) => {
            try {
                const createMovieDtos = req.body;
                let result = [];
                for (let i = 0; i < createMovieDtos.length; i++) {
                    const movie = await this.movieRepository.Create(createMovieDtos[i]);
                    result.push(movie);
                }
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: result,
                    message: 'Create movie success',
                });
            }
            catch (error) {
                return next(error);
            }
        };
        this.updateMovie = async (req, res, next) => {
            try {
                const movieId = req.params.movieId;
                const updateMovieDto = req.body;
                const movie = await this.movieRepository.Update(movieId, updateMovieDto);
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: movie,
                    message: 'Update movie success',
                });
            }
            catch (error) {
                return next(error);
            }
        };
        this.updateMulti = async (req, res, next) => {
            try {
                const data = req.body;
                let aa = [];
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    const movieId = item._id;
                    const updateMovieDto = item;
                    const movie = await this.movieRepository.Update(movieId, updateMovieDto);
                    aa.push(movie);
                }
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: aa,
                    message: 'Update movie success',
                });
            }
            catch (error) {
                return next(error);
            }
        };
    }
}
exports.default = MovieController;
//# sourceMappingURL=movie.controller.js.map