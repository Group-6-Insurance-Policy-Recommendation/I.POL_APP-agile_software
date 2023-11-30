// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWFJF0Za8-IdvynxaUjiE2PgYqwQIfQLg",
  authDomain: "ipol-app.firebaseapp.com",
  projectId: "ipol-app",
  storageBucket: "ipol-app.appspot.com",
  messagingSenderId: "165832932863",
  appId: "1:165832932863:web:bf8333895d3302d45fbbca",
  measurementId: "G-Z1VG9W3QDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
