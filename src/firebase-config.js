// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCKnHMinqL10cZZ-HT-dWEJ7AVM3S00zI",
  authDomain: "expense-tracker-acaa8.firebaseapp.com",
  projectId: "expense-tracker-acaa8",
  storageBucket: "expense-tracker-acaa8.appspot.com",
  messagingSenderId: "1030829797619",
  appId: "1:1030829797619:web:ad427c76d8e127473bc786",
  measurementId: "G-G8YWMMPSW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)