"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    movieName: { type: String, required: true, index: true },
    description: { type: String },
    actors: { type: String },
    releaseDate: { type: Date, index: true },
    director: { type: String, index: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    mainGenres: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
    rating: { type: Number },
    reviews: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    updatedBy: { type: String },
    isActive: { type: Boolean, default: true },
    status: { type: String },
    ratingCount: { type: Number },
    productionYear: { type: Number },
    country: { type: String },
    isPublished: { type: Boolean, default: false },
    movieUrls: [
        {
            url: { type: String },
            server: { type: String },
        },
    ],
    imageUrls: [
        {
            url: { type: String },
            type: { type: String },
        },
    ],
    // series: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});
// Đánh chỉ mục cho trường "categories"
MovieSchema.index({ categories: 1 });
exports.default = mongoose.model('Movie', MovieSchema);
//# sourceMappingURL=moive.schema.js.map