const router = require("express").Router();
const User = require("../modules/User");
const bcrypt = require("bcrypt");
const firebaseAuth = require("../firebase-auth"); // Import your Firebase authentication module

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // Check if a user with the provided username already exists
    const existingUser = await User.findOne({
      "profile.username": req.body.username,
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // bcrypt user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      profile: { username: req.body.username },
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    // Generate Firebase custom token and send it to the client
    const firebaseToken = req.headers.authorization;

    // Update the User's Firebase token in the database
    user.firebaseToken = firebaseToken;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword) {
      return res.status(404).send("Wrong password");
    }

    // Generate Firebase custom token and send it to the client
    const firebaseToken = req.headers.authorization;

    // Update the User's Firebase token in the database
    user.firebaseToken = firebaseToken;
    await user.save();

    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// PROTECTED ROUTE EXAMPLE
router.get("/protected", async (req, res) => {
  try {
    // Verify Firebase ID token sent by the client
    const decodedToken = await firebaseAuth.verifyIdToken(
      req.headers.authorization
    );

    // You can now use `decodedToken.uid` to get the user ID
    const userId = decodedToken.uid;

    // Fetch user data from the database using userId
    const user = await User.findById(userId);

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Authentication failed" });
  }
});

module.exports = router;
