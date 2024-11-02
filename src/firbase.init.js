// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD02Yx6NjWMGsphDWQrhngvyUUgWHhWxxM",
  authDomain: "collage-connect-d0c48.firebaseapp.com",
  projectId: "collage-connect-d0c48",
  storageBucket: "collage-connect-d0c48.appspot.com",
  messagingSenderId: "664817582325",
  appId: "1:664817582325:web:16 bde45b8bd859f0e305bc",
  measurementId: "G-X0QRVFR6DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export default auth