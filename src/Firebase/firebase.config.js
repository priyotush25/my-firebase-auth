// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2c9KWM7qjEf4cPs4LHJvCpP_a3qEDWG8",
  authDomain: "my-firebase-auth-67fb0.firebaseapp.com",
  projectId: "my-firebase-auth-67fb0",
  storageBucket: "my-firebase-auth-67fb0.firebasestorage.app",
  messagingSenderId: "889937855634",
  appId: "1:889937855634:web:88a15ec3c6d4ba30b1124b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
