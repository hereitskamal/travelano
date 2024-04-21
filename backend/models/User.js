const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phoneNo: { type: String, unique: true },
  countryCode: { type: String },
  birthdate: { type: Date },
  mailId: { type: String, required: true, unique: true },
  password: { type: String },
}, { timestamps: true });

// Password hashing middleware
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();   
});

const otpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const OTP = mongoose.model('OTP', otpSchema);
const User = mongoose.model('WebsiteUser', userSchema);

module.exports = { User, OTP };
