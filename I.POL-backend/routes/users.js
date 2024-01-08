const router = require("express").Router();
const User = require("../modules/User");
const bcrypt = require("bcrypt");
const {
  generatePasswordResetToken,
  sendPasswordResetEmail,
} = require("../hook/resetToken");

// DELETE USER
router.delete("/delete-user", async (req, res) => {
  try {
    // Get user ID from request body or headers
    const userId = req.body.userId || req.headers.userId;

    // Find the user to delete
    const user = await User.findById(userId);

    // Ensure user exists and password matches
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Delete the user using findOneAndDelete for clarity and consistency
    await User.findOneAndDelete({ _id: userId });

    res.status(200).json({ message: "Account deleted successfully" });
  } catch (err) {
    console.error(err); // Log detailed error for debugging

    // Handle potential errors more informatively
    if (err.name === "MongoError" && err.code === 11000) {
      // Handle duplicate key error (adjust message if needed)
      return res.status(400).json({ error: "User already exists" });
    } else {
      // Handle other errors generically
      return res.status(500).json({ error: "Failed to delete account" });
    }
  }
});

// GET A USER
router.get("/get-user", async (req, res) => {
  try {
    // Get user ID from request body
    const userId = req.body.userId;

    // Find the user
    const user = await User.findById(userId);

    // Filter sensitive fields if necessary
    const filteredUser = {
      ...user._doc, // Copy all fields
      _id: user._id, // Explicitly include _id
      password: undefined, // Exclude sensitive fields
      // ... exclude other sensitive fields if applicable
    };

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(filteredUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

// CHANGE PASSWORD
router.put("/change-password", async (req, res) => {
  try {
    // Get user ID and passwords from request body
    const userId = req.body.userId;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    // Find the user
    const user = await User.findById(userId);

    // Ensure user exists and old password matches
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to change password" });
  }
});

// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    // Get email from request body
    const email = req.body.email;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate a password reset token
    const resetToken = await generatePasswordResetToken(user);

    // Send password reset email with token
    await sendPasswordResetEmail(user, resetToken);

    res.status(200).json({ message: "Password reset email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to initiate password reset" });
  }
});

// RESET URL
router.get("/reset-password/:resetToken", async (req, res) => {
  try {
    // Extract reset token from URL parameter
    const resetToken = req.params.resetToken;

    // Validate token (replace with your validation logic)
    // const isValidToken = await validateResetToken(resetToken); // Implement validation

    // if (!isValidToken) {
    //   return res.status(400).json({ error: "Invalid reset token" });
    // }

    // Find the user associated with the token
    const isValidToken = await User.findOne({ resetToken });
    const isTokenExpired = await User.findOne({ resetToken });

    if (!isValidToken) {
      return res.status(404).json({ error: "Invalid reset token" });
    }

    // Check if the token has expired
    const now = Date.now();
    if (isTokenExpired.resetExpires < now) {
      return res.status(404).json({ error: "Reset token has expired" });
    }

    // Render the password reset form view
    res.render("reset-password", { resetToken }); // Adjust view name and data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to display reset form" });
  }
});

// RESET PASSWORD
router.put("/reset-password", async (req, res) => {
  try {
    // Get reset token and new password from request body
    const resetToken = req.body.resetToken;
    const newPassword = req.body.newPassword;
    console.log(newPassword);
    // Find the user associated with the token
    const user = await User.findOne({ resetToken });

    if (!user) {
      return res.status(404).json({ error: "Invalid reset token" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password and invalidate the reset token
    user.password = hashedNewPassword;
    user.resetToken = undefined;
    user.resetExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

const multer = require("multer");
const storage = multer.memoryStorage(); // Store uploaded files in memory temporarily
const upload = multer({ storage });

// CREATE PROFILE
router.post("/profile", upload.single("profilePicture"), async (req, res) => {
  try {
    const profilePicture = req.file.buffer.toString("base64");
    // Create a new profile
    const profileData = {
      profilePicture: profilePicture || "",
      coverPicture: req.body.coverPicture || "",
      desc: req.body.desc || "",
      relationship: req.body.relationship || null,
      firstname: req.body.firstname || "",
      lastname: req.body.lastname || "",
      username: req.body.username || "",
      nationality: req.body.nationality || "",
      address: req.body.address || "",
      city: req.body.city || "",
      dateOfBirth: req.body.dateOfBirth || null,
      phone: req.body.phone || "",
      gender: req.body.gender || "",
      ocupation: req.body.ocupation || "",
      maritalStatus: req.body.maritalStatus || "",
      income: req.body.income || "",
      asset: req.body.asset || "",
      liability: req.body.liability || "",
      // ... other profile fields
    };

    const createdUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          profile: profileData,
        },
      },
      {
        new: true, // Return the updated document
        populate: "profile", // Populate the profile reference
      }
    );

    if (!createdUser) {
      return res.status(404).json({ error: "User or profile not found" });
    }

    res.status(201).json(createdUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create profile" });
  }
});

// UPDATE PROFILE
router.put("/profile/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedProfileData = {
      profilePicture: req.body.profilePicture || "",
      coverPicture: req.body.coverPicture || "",
      desc: req.body.desc || "",
      relationship: req.body.relationship || null,
      firstname: req.body.firstname || "",
      lastname: req.body.lastname || "",
      username: req.body.username || "",
      nationality: req.body.nationality || "",
      address: req.body.address || "",
      city: req.body.city || "",
      dateOfBirth: req.body.dateOfBirth || null,
      // ... update other profile fields
    };

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { profile: updatedProfileData } },
      { new: true, populate: "profile" }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User or profile not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

module.exports = router;
