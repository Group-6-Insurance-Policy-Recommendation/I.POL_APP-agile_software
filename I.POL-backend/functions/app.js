const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("../routes/users");
const authRoute = require("../routes/auth");
const firebaseAuth = require("../firebase-auth");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// Firebase authentication middleware
app.use(async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("Authorization token missing");
    }

    const decodedToken = await firebaseAuth.verifyIdToken(token);
    req.user = decodedToken; // Add the authenticated user to the request object
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Authentication failed" });
  }
});

router.get("/", (req, res) => res.json({ Welcome: "Please ignore!!!" }));

router.use("/api/users", userRoute);
router.use("/api/auth", authRoute);

app.use("/.netlify/functions/api", router);

// app.listen(8800, () => {
//   console.log("Backend Server Is Running...");
// });

// Export the router for Netlify Functions
module.exports = {
  handler: serverless(app),
  app, // Export the app for local testing
};
