const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true, timestapms: true},
    email: { type: String, required: true, timestapms: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
