const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, default: "" },
  type: { type: String, required: true },
  message: { type: String, required: true },
  seen: { type: Boolean, default: false },
  triggered: { type: Boolean, default: false },
  broadcast: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  channelId: {
    type: String,
    required: true, // Enforce presence of channelId
  },
  data: {
    type: Object, // Flexible object to accommodate various notification data
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
