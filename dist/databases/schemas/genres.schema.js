"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
// Thể loại
const GenreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    updatedBy: { type: String },
    isActive: { type: Boolean, default: true },
});
exports.default = mongoose.model('Genre', GenreSchema);
//# sourceMappingURL=genres.schema.js.map