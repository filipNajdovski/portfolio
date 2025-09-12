// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL-rsS158OPTVlYmJuvoq2uhVoamBsJkE",
  authDomain: "portfolio-7a4d9.firebaseapp.com",
  projectId: "portfolio-7a4d9",
  storageBucket: "portfolio-7a4d9.firebasestorage.app",
  messagingSenderId: "879822061122",
  appId: "1:879822061122:web:7309b353d32673bdf7f7db",
  measurementId: "G-Y7PT4WMZYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };