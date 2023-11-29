const router = require("express").Router();
const User = require("../modules/User");
const bcrypt = require("bcrypt");
const firebaseAuth = require("../firebase-auth");

// UPDATE USER
router.put("/:id", async (req, res) => {
  try {
    // Verify Firebase ID token sent by the client
    const decodedToken = await firebaseAuth.verifyIdToken(
      req.headers.authorization
    );

    // You can now use `decodedToken.uid` to get the user ID
    const userId = decodedToken.uid;
    // const userId = req.params.id;
    const {
      userId: requestUserId,
      isAdmin,
      password,
      ...otherUpdateFields
    } = req.body;

    // Check if the user making the request is the account owner or an admin
    if (requestUserId === userId || isAdmin) {
      // If the request includes a password, hash it before updating
      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        otherUpdateFields.password = hashedPassword;
      }

      // Update the user account
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: otherUpdateFields },
        { new: true }
      );

      // Remove sensitive information from the response
      const {
        password: _,
        updatedAt,
        ...updatedUserWithoutSensitiveInfo
      } = updatedUser._doc;

      res.status(200).json(updatedUserWithoutSensitiveInfo);
    } else {
      res.status(403).json("You can update only your account!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    // Verify Firebase ID token sent by the client
    const decodedToken = await firebaseAuth.verifyIdToken(
      req.headers.authorization
    );

    // You can now use `decodedToken.uid` to get the user ID
    const userId = decodedToken.uid;

    if (userId === req.params.id || req.body.isAdmin) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete user account" });
  }
});

// GET A USER
router.get("/:id", async (req, res) => {
  try {
    // Verify Firebase ID token sent by the client
    const decodedToken = await firebaseAuth.verifyIdToken(
      req.headers.authorization
    );

    // You can now use `decodedToken.uid` to get the user ID
    const userId = decodedToken.uid;

    const user = await User.findById(req.params.id);

    // Check if the requesting user is the same as the user being queried or is an admin
    if (userId === req.params.id || user.isAdmin) {
      const { password, updatedAt, ...other } = user._doc;
      res.status(200).json(other);
    } else {
      return res
        .status(403)
        .json(
          "You can only retrieve your own account details or you must be an admin"
        );
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// CREATE PROFILE
router.post("/profile", async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have a middleware that adds the user to the request object

    // Fetch the user from the database
    const user = await User.findById(userId);

    // Check if the user already has a profile
    if (user.profile) {
      return res.status(400).json({ error: "User profile already exists" });
    }

    // Create a new profile
    user.profile = {
      // Add profile fields based on your requirements
      bio: req.body.bio,
      address: req.body.address,
      // ... other profile fields
    };

    // Save the updated user
    await user.save();

    res.status(201).json(user.profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create profile" });
  }
});

// UPDATE PROFILE
router.put("/profile", async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have a middleware that adds the user to the request object

    // Fetch the user from the database
    const user = await User.findById(userId);

    // Check if the user has a profile
    if (!user.profile) {
      return res.status(404).json({ error: "User profile not found" });
    }

    // Update profile fields
    user.profile.bio = req.body.bio || user.profile.bio;
    user.profile.address = req.body.address || user.profile.address;
    // ... update other profile fields

    // Save the updated user
    await user.save();

    res.status(200).json(user.profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

module.exports = router;
