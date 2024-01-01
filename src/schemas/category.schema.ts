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
export default Category;
