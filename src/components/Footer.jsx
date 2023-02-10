import React, { useState } from "react";
import "./Footer.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";

function Footer() {

  const [input, setinput] = useState("");
  const [sp, setsp] = useState("");
  const getinput = (e) => {
    e.preventDefault();
    console.log(input);
  //  var clicked = true;

    setinput(input);
    addDoc(collection(db, "posts"), {
      text: input,
      timestamp: serverTimestamp(),
    });
   
  };

  
  return (
    <div className="Footer">
      <div className="Footer_content">
        <form id="myForm" className="myForm">
          <input
            type="text"
            placeholder="ADD MESSAGE"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button type="submit" onClick={getinput}>
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
