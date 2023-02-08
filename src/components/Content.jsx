import React, { useEffect, useState } from 'react'
import {query  , collection , orderBy , onSnapshot , getDocs} from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import {db} from "./Firebase"
import "./Content.css"

function Content() {
  const[postgot , setpostgot ] = useState([]);
  useEffect(()=>{
 const q = query(collection(db , "posts"))
 const unsubscribe = onSnapshot(q,(querysnapshot)=>{
  let postgot = [];
  querysnapshot.forEach((snap)=>{
    postgot.push({...snap.data()})
  })
  console.log(postgot)
  setpostgot(postgot)
 })
 return ()=>unsubscribe()
  } , [])

  return (
    <div className='Content' >

      {/* {setpostgot.map((post)=>{
        <h1>post.text</h1>
      }
      )} */}

        I am the content

    </div>
  )
}

export default Content