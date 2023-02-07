import React, { useEffect, useState } from 'react'
import {query  , collection , orderBy , onSnapshot} from "firebase/firestore"
import {db} from "./Firebase"
import "./Content.css"

function Content() {
  const[postgot , setpostgot ] = useState([]);
  // useEffect(() => {
  //   const q = query(collection(db, 'shitposts'), orderBy('timestamp'));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let postgot = [];
  //     querySnapshot.forEach((doc) => {
  //       postgot.push({ ...doc.data(), id: doc.id });
  //     });
  //     setpostgot(postgot);
  //   });
  //   return () => unsubscribe();
  // }, []);  
  // const q = query(collection(db, 'shitposts'), orderBy('timestamp'));
  console.log(db)
  // console.log(collection(db , "lol"))
  return (
    <div className='Content' >

        I am the content

    </div>
  )
}

export default Content