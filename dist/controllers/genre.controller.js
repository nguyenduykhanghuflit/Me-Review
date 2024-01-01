"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const genre_service_1 = tslib_1.__importDefault(require("../services/genre.service"));
class GenresController {
    constructor() {
        this.genreService = new genre_service_1.default();
        this.get = async (req, res, next) => {
            try {
                const data = await this.genreService.Get();
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
                const data = await this.genreService.Create(body);
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