const admin = require("firebase-admin");
const serviceAccount = require("./path/to/your/firebase/serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com",
});

/**
 * Create a custom token for a given user ID.
 * @param {string} userId - User ID
 * @returns {Promise<string>} - Custom token
 */
const createCustomToken = async (userId) => {
  try {
    const customToken = await admin.auth().createCustomToken(userId);
    return customToken;
  } catch (error) {
    console.error("Error creating custom token:", error);
    throw error;
  }
};

/**
 * Verify a Firebase ID token.
 * @param {string} idToken - Firebase ID token
 * @returns {Promise<object>} - Decoded token data
 */
const verifyIdToken = async (idToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    console.error("Error verifying ID token:", error);
    throw error;
  }
};

module.exports = {
  createCustomToken,
  verifyIdToken,
};
