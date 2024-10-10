// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMUWx1eX0oefB7GU0RPjJ_QBV-7njU3kw",
  authDomain: "bkash-79250.firebaseapp.com",
  projectId: "bkash-79250",
  storageBucket: "bkash-79250.appspot.com",
  messagingSenderId: "193172720529",
  appId: "1:193172720529:web:facd1024e097db1ecf6830",
  measurementId: "G-LZ3ZFV8G14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);