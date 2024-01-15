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
    subject: "Password Reset Request",
    text:
      `You are receiving this email because you (or someone else) has requested a password reset for your account.\n\n` +
      `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
      `${process.env.CLIENT_URL}/reset-password/${resetToken}/${newPassword}\n\n` +
      `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = {
  generatePasswordResetToken,
  validateResetToken,
  sendPasswordResetEmail,
};
