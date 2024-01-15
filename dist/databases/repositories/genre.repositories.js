"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const exception_utils_1 = require("../../utils/exception.utils");
const genres_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/genres.schema"));
const class_validator_1 = require("class-validator");
class GenreRepository {
    constructor() {
        this.genres = genres_schema_1.default;
    }
    async Get() {
        try {
            const data = await this.genres.find();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async GetDetail(id) {
        try {
            const data = await this.genres.findById(id);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async Create(body) {
        try {
            if ((0, class_validator_1.isEmpty)(body))
                throw new exception_utils_1.HttpException(400, 'categoryData is empty');
            const response = await this.genres.create(Object.assign({}, body));
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = GenreRepository;
//# sourceMappingURL=genre.repositories.js.map