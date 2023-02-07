
import { initializeApp } from 'firebase/app';import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA2whOmXBcQGAmsphpqv3h_BwMD0sHO8xQ",
    authDomain: "chat-mern-nocss.firebaseapp.com",
    projectId: "chat-mern-nocss",
    storageBucket: "chat-mern-nocss.appspot.com",
    messagingSenderId: "1053427809648",
    appId: "1:1053427809648:web:1fe5e1b68e2b70549b63b5",
    measurementId: "G-RXL532W4RR"
  };
  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);