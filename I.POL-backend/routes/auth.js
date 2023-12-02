const router = require("express").Router();
const User = require("../modules/User");
const bcrypt = require("bcrypt");
const firebaseAuth = require("../firebase-auth"); // Import your Firebase authentication module

// REGISTER
router.post("/register", async (req, res) => {
  try {
    // bcrypt user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and post req
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("user not found");

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !isValidPassword && res.status(404).send("wrong password");

    // Generate Firebase custom token and send it to the client
    const firebaseToken = await firebaseAuth.createCustomToken(
      user._id.toString()
    );

    // Update the User's Firebase token in the database
    user.firebaseToken = firebaseToken;
    await user.save();

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json(err);
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
