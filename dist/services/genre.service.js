"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const genres_schema_1 = tslib_1.__importDefault(require("../schemas/genres.schema"));
const class_validator_1 = require("class-validator");
class GenreService {
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
                throw new HttpException_1.HttpException(400, 'categoryData is empty');
            const response = await this.genres.create(Object.assign({}, body));
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = GenreService;
//# sourceMappingURL=genre.service.js.map