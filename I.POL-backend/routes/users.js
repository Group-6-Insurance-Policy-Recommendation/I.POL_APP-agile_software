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
    // Create a new profile
    const profileData = {
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
