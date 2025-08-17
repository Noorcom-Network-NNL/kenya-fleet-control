// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz1_B_F92rbliSYSddxkwFTjrGKOfzw78",
  authDomain: "fleet-web-control.firebaseapp.com",
  projectId: "fleet-web-control",
  storageBucket: "fleet-web-control.firebasestorage.app",
  messagingSenderId: "1014552421747",
  appId: "1:1014552421747:web:9e69f84260a601a6231106",
  measurementId: "G-7XLK9SG8QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };