// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMPU7Ok4XFYZhyiA0-WHza_yVpxSyVsH8",
  authDomain: "monkey-blogging-64dd3.firebaseapp.com",
  projectId: "monkey-blogging-64dd3",
  storageBucket: "monkey-blogging-64dd3.appspot.com",
  messagingSenderId: "99317883913",
  appId: "1:99317883913:web:f04e90688446bfbd2c84d8",
  measurementId: "G-XQXG4MVC46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
