
import { initializeApp } from "firebase/app";
import{
  getFirestore 
}from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDiBoALZJxQ6wR0WkW2GczCqKgeQ3mdCK8",
  authDomain: "rtshsthgh-b.firebaseapp.com",
  projectId: "rtshsthgh-b",
  storageBucket: "rtshsthgh-b.appspot.com",
  messagingSenderId: "831910633970",
  appId: "1:831910633970:web:188742dc0f6c678c6c0b6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore();
