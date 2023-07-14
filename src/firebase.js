// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU7-7JynPln47rDrXCixZnEfUTSeaZsZs",
  authDomain: "zunigamovie.firebaseapp.com",
  projectId: "zunigamovie",
  storageBucket: "zunigamovie.appspot.com",
  messagingSenderId: "389696957313",
  appId: "1:389696957313:web:9332c6d8b370fdba979680"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
