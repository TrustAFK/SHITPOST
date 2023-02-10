import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import "./Content.css";
import Message from "./Message";

function Content() {
  const [postgot, setpostgot] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts")  , orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querysnapshot) => {
      let postgot = [];
      querysnapshot.forEach((snap) => {
        postgot.push({ ...snap.data() });
      });
      console.log(postgot);
      setpostgot(postgot);
    });
    return () => unsubscribe();
  }, []);
 

  return (
    <div className="Content">
      {postgot&& postgot.map((post)=>{
         {console.log(post)}
         return(
        <Message content={post.text}></Message>)}
      )}
    </div>
  );
}

export default Content;
