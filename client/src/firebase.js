// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "campus-digest.firebaseapp.com",
  projectId: "campus-digest",
  storageBucket: "campus-digest.appspot.com",
  messagingSenderId: "454133427597",
  appId: "1:454133427597:web:ff11b9cc296a43457d21c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);