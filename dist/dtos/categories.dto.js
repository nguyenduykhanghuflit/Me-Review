"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGenreDto = exports.CreateCategoryDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateCategoryDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateCategoryDto.prototype, "description", void 0);
exports.CreateCategoryDto = CreateCategoryDto;
class CreateGenreDto {
}
exports.CreateGenreDto = CreateGenreDto;
//# sourceMappingURL=categories.dto.js.map