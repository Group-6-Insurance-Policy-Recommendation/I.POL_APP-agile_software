const mongoose = require("mongoose");
const { Schema } = mongoose;

const policySchema = new Schema(
  {
    policyNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    holder: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coverage: {
      type: String,
      required: true,
    },
    premium: {
      type: Number,
      required: true,
    },
    terms: {
      type: String,
      required: true,
    },
    // Add other policy-related fields as below
  },
  {
    timestamps: true,
  }
);

const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
