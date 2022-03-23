// models/User.js

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

UserSchema.set("timestamps", true);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
