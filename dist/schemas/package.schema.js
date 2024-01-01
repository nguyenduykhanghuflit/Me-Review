"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const PackageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date },
    title: { type: String },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    updatedBy: { type: String },
    isActive: { type: Boolean, default: true },
});
const Package = mongoose.model('Package', PackageSchema);
exports.default = Package;
//# sourceMappingURL=package.schema.js.map