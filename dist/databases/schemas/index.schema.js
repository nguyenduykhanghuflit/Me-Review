"use strict";
const tslib_1 = require("tslib");
const category_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/category.schema"));
const favorite_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/favorite.schema"));
const genres_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/genres.schema"));
const moive_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/moive.schema"));
const news_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/news.schema"));
const user_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/user.schema"));
module.exports = {
    Category: category_schema_1.default,
    Favorite: favorite_schema_1.default,
    Genres: genres_schema_1.default,
    Moive: moive_schema_1.default,
    News: news_schema_1.default,
    User: user_schema_1.default,
};
//# sourceMappingURL=index.schema.js.map