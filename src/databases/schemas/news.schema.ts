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

export default mongoose.model('News', NewsSchema);
