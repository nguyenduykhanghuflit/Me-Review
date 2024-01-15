"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const category_schema_1 = tslib_1.__importDefault(require("../../databases/schemas/category.schema"));
const exception_utils_1 = require("../../utils/exception.utils");
const util_1 = require("../../utils/util");
class CategoryRepository {
    constructor() {
        this.categories = category_schema_1.default;
    }
    async Get() {
        const allCategory = await this.categories.find();
        return allCategory;
    }
    async GetDetail(id) {
        try {
            const data = await this.categories.findById(id);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async Create(categoryData) {
        if ((0, util_1.isEmpty)(categoryData))
            throw new exception_utils_1.HttpException(400, 'categoryData is empty');
        const createCategroryData = await this.categories.create(Object.assign({}, categoryData));
        return createCategroryData;
    }
}
exports.default = CategoryRepository;
//# sourceMappingURL=category.repositories.js.map