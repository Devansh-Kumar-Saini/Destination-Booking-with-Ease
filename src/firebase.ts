// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkCHV5T3PLS5eQmLFT7ynbzzEejWFFU-0",
  authDomain: "e-commerce-4e169.firebaseapp.com",
  projectId: "e-commerce-4e169",
  storageBucket: "e-commerce-4e169.appspot.com", // <-- fixed here
  messagingSenderId: "881882396601",
  appId: "1:881882396601:web:913df5964f288d3df8a868",
  measurementId: "G-8ENM1WDQ85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth for use in your app
export const auth = getAuth(app);