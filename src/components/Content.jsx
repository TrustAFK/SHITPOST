import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
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
        postgot.push({ ...snap.data()  , id:snap.id });
        // console.log(snap)
      });
      // console.log(postgot);
      setpostgot(postgot);
    });
    return () => unsubscribe();
  }, []);

    var messbot = document.getElementById("BHAK");

    useEffect(()=>{
  if(postgot.length!=0){
  messbot?.lastChild.scrollIntoView()}
  
  } , [postgot])




  return (
    <div className="Content" id="BHAK">
      {postgot&& postgot.map((post)=>{
        //  {console.log(post)}
         return(
        <Message content={post.text} key={post.id}></Message>)}
      )}
    </div>
  );
}

export default Content;
