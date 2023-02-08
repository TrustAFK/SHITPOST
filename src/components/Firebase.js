import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh0maOq97TicoGNWawkrmqXMLlR77wDwA",
  authDomain: "shitposting-17401.firebaseapp.com",
  databaseURL: "https://shitposting-17401-default-rtdb.firebaseio.com",
  projectId: "shitposting-17401",
  storageBucket: "shitposting-17401.appspot.com",
  messagingSenderId: "951146416523",
  appId: "1:951146416523:web:0d4bb091d062fea2e9878e",
  measurementId: "G-KCR9ZJ1MHX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
