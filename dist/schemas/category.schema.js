"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
// Danh mục
const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    updatedBy: { type: String },
    isActive: { type: Boolean, default: true },
});
const Category = mongoose.model('Category', CategorySchema);
exports.default = Category;
//# sourceMappingURL=category.schema.js.map