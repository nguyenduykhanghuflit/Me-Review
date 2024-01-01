"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
// Danh sách yêu thích
const FavoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    updatedBy: { type: String },
    isActive: { type: Boolean, default: true },
    deviceId: { type: String, required: false },
});
exports.default = mongoose.model('Favorite', FavoriteSchema);
//# sourceMappingURL=favorite.schema.js.map