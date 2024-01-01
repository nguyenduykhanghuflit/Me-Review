const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
   title: { type: String, required: true, index: true }, // Đánh chỉ mục cho trường "title"
   movieName: { type: String, required: true, index: true }, // Đánh chỉ mục cho trường "title"
   description: { type: String },
   releaseDate: { type: Date, index: true },
   director: { type: String, index: true }, //đạo diễn
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
   ratingCount: { type: Number }, // Lượt đánh giá
   productionYear: { type: Number }, // Năm sản xuất
   country: { type: String }, // Quốc gia
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

export default mongoose.model('Movie', MovieSchema);
