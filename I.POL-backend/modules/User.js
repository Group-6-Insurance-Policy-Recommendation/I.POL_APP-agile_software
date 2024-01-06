const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    resetToken: { type: String },
    resetExpires: { type: Date },
    profile: {
      profilePicture: {
        type: String,
        default: "",
      },
      coverPicture: { type: String, default: "" },
      desc: { type: String, default: "" },
      relationship: { type: String, default: null },
      firstname: { type: String, default: "" },
      lastname: { type: String, default: "" },
      username: { type: String, default: "", unique: true, required: true },
      nationality: { type: String, default: "" },
      address: { type: String, default: "" },
      city: { type: String, default: "" },
      dateOfBirth: { type: Date, default: null },
    },
    policies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Policy",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
