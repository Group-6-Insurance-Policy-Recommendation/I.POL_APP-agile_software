const express = require("express");
const router = express.Router();
const Notification = require("../modules/Notification");

// /broadcast
router.post("/broadcast", async (req, res) => {
  try {
    const { message, data } = req.body; // Extract message and optional data
    wss.clients.broadcast(JSON.stringify({ message, data })); // Broadcast to all clients
    res.status(200).json({ message: "Notification broadcast sent" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({
        error: "Failed to broadcast notification",
        details: err.message,
      });
  }
});

// POST /notifications/create
router.post("/create", async (req, res) => {
  try {
    const { userId, type, message, channelId, data } = req.body; // Extract new fields
    const notification = new Notification({
      userId,
      type,
      message,
      channelId,
      data,
    });
    await notification.save();
    await wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN && client.userId === userId) {
        try {
          client.send(JSON.stringify(notification));
          console.log("Notification sent to client:", client.id);
        } catch (err) {
          console.error("Error sending notification to client:", err);
        }
      }
    });
    res.status(201).json({ message: "Notification created" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Failed to create notification", details: err.message });
  }
});

// GET /notifications/user/:userId
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const notifications = await Notification.find({ userId });
    res.json(notifications);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Failed to fetch notification", details: err.message });
  }
});

module.exports = function (wss) {
  // Receive wss as a parameter
  return router;
};
