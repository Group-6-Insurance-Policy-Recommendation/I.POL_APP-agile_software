const mongoose = require("mongoose");
const { Schema } = mongoose;

const claimSchema = new Schema(
  {
    policy: {
      type: Schema.Types.ObjectId,
      ref: "Policy",
      required: true,
    },
    claimant: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    // Add other claim-related fields as below
  },
  {
    timestamps: true,
  }
);

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;
