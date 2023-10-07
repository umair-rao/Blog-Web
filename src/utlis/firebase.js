// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-400911.firebaseapp.com",
  projectId: "blog-app-400911",
  storageBucket: "blog-app-400911.appspot.com",
  messagingSenderId: "799468781504",
  appId: "1:799468781504:web:e30a304b60089c7d661225"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);