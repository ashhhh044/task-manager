// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-1795e.firebaseapp.com",
  projectId: "taskmanager-1795e",
  storageBucket: "taskmanager-1795e.firebasestorage.app",
  messagingSenderId: "389023396819",
  appId: "1:389023396819:web:e99fdd8dd0da6fbd42b526",
  measurementId: "G-W2H7WQFHJ5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);