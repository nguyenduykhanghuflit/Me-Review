"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const moive_schema_1 = tslib_1.__importDefault(require("../schemas/moive.schema"));
class MovieService {
    constructor() {
        this.movies = moive_schema_1.default;
    }
    async Get(filterMovie) {
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
                    case 'keyword':
                        // Thêm điều kiện tìm kiếm cho các trường cụ thể
                        query.$or = [
                            { title: { $regex: filter.value, $options: 'i' } },
                            { movieName: { $regex: filter.value, $options: 'i' } },
                            { description: { $regex: filter.value, $options: 'i' } },
                            { director: { $regex: filter.value, $options: 'i' } },
                        ];
                        break;
                    case 'genre':
                        // Thêm điều kiện tìm kiếm theo thể loại trong genres và mainGenres
                        query.$or = [
                            { genres: { $in: [filter.value] } },
                            { mainGenres: filter.value },
                        ];
                        break;
                    default:
                        throw new Error('Invalid filter type.');
                }
            }
        }
        const movies = await this.movies
            .find(query)
            .skip(skip)
            .limit(limit)
            .populate({
            path: 'genres',
            model: 'Genre',
            select: '_id name description',
        })
            .populate({
            path: 'categories',
            model: 'Category',
            select: '_id name description',
        })
            .populate({
            path: 'mainGenres',
            model: 'Genre',
            select: '_id name description',
        })
            .exec();
        const totalMovies = await this.movies
            .find(query)
            .countDocuments();
        const totalPage = Math.ceil(totalMovies / limit);
        const res = {
            currentPage: filterMovie.page,
            totalPage,
            totalMovies: movies.length,
            movies,
        };
        return res;
    }
    async GetDetail(id) {
        try {
            const data = this.movies.findById(id);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async Create(createMovieDto) {
        const movie = await this.movies.create(createMovieDto);
        return movie;
    }
    async Update(movieId, updateMovieDto) {
        const movie = await this.movies.findByIdAndUpdate(movieId, updateMovieDto, { new: true });
        return movie;
    }
}
exports.default = MovieService;
//# sourceMappingURL=movie.service.js.map