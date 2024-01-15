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

export default mongoose.model('Genre', GenreSchema);
