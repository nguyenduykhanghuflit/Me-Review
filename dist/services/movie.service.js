"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moive_schema_1 = tslib_1.__importDefault(require("../schemas/moive.schema"));
class MovieService {
    constructor() {
        this.movies = moive_schema_1.default;
    }
    async findMovies(filterMovie) {
        const limit = filterMovie.pageSize;
        const skip = (filterMovie.page - 1) * limit;
        let query = {};
        for (const filter of filterMovie.filters) {
            if (filter.value !== null && filter.value != undefined) {
                switch (filter.type) {
                    case 'category':
                        query.categories = filter.value;
                        break;
                    case 'productionYear':
                        query.productionYear = filter.value;
                        break;
                    case 'status':
                        query.status = filter.value;
                        break;
                    default:
                        throw new Error('Invalid filter type.');
                }
            }
        }
        const movies = await this.movies
            .find(query)
            .skip(skip)
            .limit(limit);
        const totalMovies = await this.movies
            .find(query)
            .countDocuments();
        const totalPage = Math.ceil(totalMovies / limit);
        const res = { movies, totalPage };
        return res;
    }
    async createMovie(createMovieDto) {
        const movie = await this.movies.create(createMovieDto);
        return movie;
    }
    async updateMovie(movieId, updateMovieDto) {
        const movie = await this.movies.findByIdAndUpdate(movieId, updateMovieDto, { new: true });
        return movie;
    }
}
exports.default = MovieService;
//# sourceMappingURL=movie.service.js.map