"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const genre_repositories_1 = tslib_1.__importDefault(require("../databases/repositories/genre.repositories"));
class GenresController {
    constructor() {
        this.genreRepository = new genre_repositories_1.default();
        this.get = async (req, res, next) => {
            try {
                const data = await this.genreRepository.Get();
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: data,
                    message: 'Get data success',
                });
            }
            catch (error) {
                next(error);
            }
        };
        this.create = async (req, res, next) => {
            try {
                const body = req.body;
                body.updatedAt = new Date();
                body.updatedBy = 'DEV';
                const data = await this.genreRepository.Create(body);
                return res.status(200).json({
                    success: true,
                    code: 200,
                    data: data,
                    message: 'Get data success',
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = GenresController;
//# sourceMappingURL=genre.controller.js.map