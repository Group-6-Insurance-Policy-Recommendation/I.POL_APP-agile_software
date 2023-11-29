const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const firebaseAuth = require("./firebase-auth"); // Import your Firebase authentication module

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Firebase authentication middleware
app.use(async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = await firebaseAuth.verifyIdToken(token);
    req.user = decodedToken; // Add the authenticated user to the request object
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Authentication failed" });
  }
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend Server Is Running...");
});
