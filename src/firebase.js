// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdUiYApE9lpCmIT9vatZmOwbA512zlZO8",
  authDomain: "healthiq-5a841.firebaseapp.com",
  projectId: "healthiq-5a841",
  storageBucket: "healthiq-5a841.firebasestorage.app",
  messagingSenderId: "21871730398",
  appId: "1:21871730398:web:ebf521cb77c4a8d0c96c4f",
  measurementId: "G-PCT20LBPZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);