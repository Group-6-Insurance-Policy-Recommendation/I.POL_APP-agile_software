const express = require("express");
const router = express.Router();
const Notification = require("../modules/Notification");

// POST /notifications/create
router.post("/create", async (req, res) => {
  try {
    if (!req.body || !req.body.userId) {
      return res.status(400).json({ error: "Missing userId in request body" });
    }

    // const { userId, type, message, channelId, data } = req.body; // Extract new fields
    const userId = req.body.userId;

    const notification = new Notification({
      userId: req.body.userId,
      type: req.body.type,
      message: req.body.message,
      channelId: req.body.channelId,
      data: req.body.data,
    });
    await notification.save();

    res.status(201).json(notification);
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

// PUT /notifications/:notificationId/mark-seen
router.put("/:notificationId/mark-seen", async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(
      req.params.notificationId,
      {
        seen: true,
      },
      { new: true }
    ); // Return updated notification

    res.json({ message: "Notification marked as seen" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to mark notification as seen",
      details: err.message,
    });
  }
});

// PUT /notifications/user/:userId/mark-all-seen
router.put("/user/:userId/mark-all-seen", async (req, res) => {
  try {
    await Notification.updateMany(
      { userId: req.params.userId },
      { seen: true }
    );

    res.json({ message: "All notifications marked as seen" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to mark notifications as seen",
      details: err.message,
    });
  }
});

module.exports = router;
