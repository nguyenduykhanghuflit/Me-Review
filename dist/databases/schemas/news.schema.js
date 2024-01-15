"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    publishedDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    updatedBy: { type: String },
    isActive: { type: Boolean, default: true },
});
exports.default = mongoose.model('News', NewsSchema);
//# sourceMappingURL=news.schema.js.map