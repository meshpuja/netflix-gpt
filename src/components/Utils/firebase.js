// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABQFcbsL08zqB62IrtYiZ6bwpdMT_69Bg",
  authDomain: "netflix-gpt-e736f.firebaseapp.com",
  projectId: "netflix-gpt-e736f",
  storageBucket: "netflix-gpt-e736f.appspot.com",
  messagingSenderId: "497046317069",
  appId: "1:497046317069:web:a584bdba37d3c5b8f44d44",
  measurementId: "G-FG1VLYJDX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
