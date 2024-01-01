const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   email: { type: String, required: false },
   phone: { type: String, required: false },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date },
   updatedBy: { type: String },
   isActive: { type: Boolean, default: true },
   isBlocked: { type: Boolean, default: false },
   codeActive: { type: String, required: false },
   opt: { type: String, required: false },
   sendOtp: { type: Boolean, default: false },
});

export default mongoose.model('User', UserSchema);
