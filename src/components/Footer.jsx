import React, { useState } from "react";
import "./Footer.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";

function Footer() {

  const [input, setinput] = useState("");
  const [sp, setsp] = useState("");
  const getinput = (e) => {
    e.preventDefault();
    let input_trimmed = input.trim() 
    if(input_trimmed == ""){
      return;
    }
    
    setinput(input_trimmed);
    console.log(input_trimmed);
    addDoc(collection(db, "posts"), {
      text: input_trimmed,
      timestamp: serverTimestamp(),
    });
    setinput('');
  };

  
  return (
    <div className="Footer">
      <div className="Footer_content">
        <form id="myForm1" className="myForm">
          <input
            type="text"
            placeholder="ADD MESSAGE"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button type="submit" onClick={getinput}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
