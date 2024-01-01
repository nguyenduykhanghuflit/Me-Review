"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGenreDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateGenreDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateGenreDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateGenreDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", Date)
], CreateGenreDto.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], CreateGenreDto.prototype, "updatedBy", void 0);
exports.CreateGenreDto = CreateGenreDto;
//# sourceMappingURL=genre.dto.js.map