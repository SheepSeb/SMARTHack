// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLhNDmsB9IxoRE2teze9iYFQcjQclXlTs",
  authDomain: "crypto-hex-2aaa6.firebaseapp.com",
  databaseURL: "https://crypto-hex-2aaa6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crypto-hex-2aaa6",
  storageBucket: "crypto-hex-2aaa6.appspot.com",
  messagingSenderId: "674873022203",
  appId: "1:674873022203:web:fc443637d5998c7ea2825e",
  measurementId: "G-RNCHEQXXW0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();