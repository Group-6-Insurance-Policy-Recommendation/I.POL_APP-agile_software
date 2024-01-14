const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const policyRoute = require("./routes/policyInfo");
const notificationRoutes = require("./routes/notification");
const path = require("path");
// const firebaseAuth = require("./firebase-auth");
const socketIO = require("socket.io");
const Notification = require("./modules/Notification");

const app = express();
app.set("view engine", "ejs");
const router = express.Router();
app.set("views", path.join(__dirname, "template"));

const server = app.listen(8800, () => {
  console.log("Backend Server Is Running...");
});

const io = socketIO(server);

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

io.on("connect", (socket) => {
  console.log("WebSocket client connected:", socket.id);
});

try {
  io.on("notification", async (client) => {
    // Handle the event and send a response
    const userId = client.userId;
    const notifications = await Notification.find({
      userId,
      seen: false,
      triggered: false,
    });

    // Update triggered to false for emitted notifications
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      triggered: true,
    }));

    await Promise.all(
      updatedNotifications.map((notification) =>
        Notification.findByIdAndUpdate(notification._id, notification, {
          new: true,
        })
      )
    );

    const data = JSON.stringify(updatedNotifications);
    console.log("Received event:", data);
    io.to(data.userId).emit("response", {
      message: "Data received",
      data,
    });
  });
} catch (err) {
  console.error(err);
  // Handle error and send feedback to client if needed
  console.error(err);
  io.emit("error", {
    message: "Failed to get notifications",
    details: err.message,
  });
}

try {
  io.on("broadcast", async () => {
    // Handle the event and send a response
    const notifications = await Notification.find({
      userId: "",
      seen: false,
      triggered: false,
    });

    // Update triggered to false for emitted notifications
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      triggered: true,
    }));

    await Promise.all(
      updatedNotifications.map((notification) =>
        Notification.findByIdAndUpdate(notification._id, notification, {
          new: true,
        })
      )
    );

    const data = JSON.stringify(updatedNotifications);
    console.log("Received event:", data);
    io.to(data.userId).emit("response", {
      message: "Data received",
      data,
    });
  });
} catch (err) {
  console.error(err);
  // Handle error and send feedback to client if needed
  console.error(err);
  io.emit("error", {
    message: "Failed to get notifications",
    details: err.message,
  });
}

// try {
//   io.on("create", async (data) => {
//     const notification = new Notification({
//       userId: data.userId,
//       message: data.message,
//       data: data.data,
//     });
//     await notification.save();
//     const data = JSON.stringify(notification);
//     await io
//       .to(data.userId)
//       .emit("notificationCreated", { message: "Notification created", data });
//   });
// } catch (err) {
//   console.error(err);
//   // Handle error and send feedback to client if needed
//   console.error(err);
//   res
//     .status(500)
//     .json({ error: "Failed to create notification", details: err.message });
// }

// Integrate WebSocket into your Express app

app.use((req, res, next) => {
  req.io = io;
  next();
});

// middlewares
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(morgan("common"));
app.use(
  cors({
    origin: ["*", "http://localhost:8081", "exp://10.20.154.55:8081"], // Specify allowed origins
    credentials: true, // Allow sending cookies in requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allow specific methods
  })
);
app.options("*", cors());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Check if headers have already been sent
  if (res.headersSent) {
    return next(err);
  }

  // Handle different types of errors
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    res.status(400).send({ error: "Invalid JSON syntax" });
  } else {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

// Global unhandled exception handler
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  // You may want to perform cleanup tasks before exiting the process
  process.exit(1);
});

// Firebase authentication middleware
// app.use(async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     if (!token) {
//       throw new Error("Authorization token missing");
//     }

//     const decodedToken = await firebaseAuth.verifyIdToken(token);
//     req.user = decodedToken; // Add the authenticated user to the request object
//     next();
//   } catch (err) {
//     console.error(err);
//     res.status(401).json({ error: "Authentication failed" });
//   }
// });

router.get("/", (req, res) => res.json({ Welcome: "Please ignore!!!" }));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/policy", policyRoute);
app.use("/api/notifications", notificationRoutes);
