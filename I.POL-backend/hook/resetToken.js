// Import necessary modules
const crypto = require("crypto");
const User = require("../modules/User");

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// Function to generate a password reset token
const generatePasswordResetToken = async (user) => {
  const resetPasswordToken = crypto.randomBytes(32).toString("hex");

  // Save the token to the user's document in the database
  user.resetToken = resetPasswordToken;
  user.resetExpires = Date.now() + 3600000; // Token expires in 1 hour
  await user.save();

  return resetPasswordToken;
};

const generatePasswordResetOTP = async (user) => {
  // Generate a random 6-digit OTP using a cryptographically secure random number generator:
  const otp = Math.floor(Math.random() * 900000) + 100000; // Ensures a 6-digit integer

  // Save the OTP to the user's document in the database:
  user.resetToken = otp.toString(); // Convert to string for consistency
  user.resetExpires = Date.now() + 900000; // OTP expires in 15 minutes
  await user.save();

  return otp.toString(); // Return the OTP as a string
};

const validateResetToken = async (resetToken) => {
  try {
    // Find the user with the matching resetToken
    const user = await User.findOne({ resetToken });

    if (!user) {
      return false; // Invalid token
    }

    // Check if the token has expired
    const now = Date.now();
    if (user.resetExpires < now) {
      return false; // Expired token
    }

    return true; // Valid token
  } catch (err) {
    console.error(err);
    // Handle potential errors (e.g., database errors)
    return false;
  }
};

// Function to send a password reset email
const sendPasswordResetEmail = async (user, resetToken) => {
  // Create an OAuth2 client
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  // Set the refresh token to get an access token
  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  // Create a transporter using the OAuth2 client
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.OAUTH_EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: await oauth2Client.getAccessToken(),
    },
  });

  // Compose the email message
  const mailOptions = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "Insurance Policy 🚀✨ - Password Reset Code",
    text:
      `Hi ${user.profile.username},\n\n` +
      `You (or someone else) has requested a password reset for your account. To complete the process, please enter the following 6-digit code:\n\n` +
      `**${resetToken}**\n\n` +
      `This code is valid for 15 minutes.\n\n` +
      `If you did not request a password reset, please disregard this email. Your password will remain unchanged.\n\n` +
      `For security reasons, please do not share this code with anyone.\n\n` +
      `Thank you,\n` +
      `The Insurance Policy 🚀✨ Team`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = {
  generatePasswordResetToken,
  generatePasswordResetOTP,
  validateResetToken,
  sendPasswordResetEmail,
};
