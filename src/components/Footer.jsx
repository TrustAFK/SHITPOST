import React, { useState } from 'react'
import "./Footer.css"



function Footer() {

  const [input , setinput] = useState("")
  const getinput =(e)=>{
    e.preventDefault();
    console.log(input);

  }

  return (
    <div className='Footer'>

        <div className="Footer_content">
          <form >
          <input type="text" placeholder='ADD MESSAGE'value ={input} onChange={e=>setinput(e.target.value)} />
          <button type='submit' onClick={getinput}  > Send </button>

          </form>
        </div>


    </div>
  )
}

export default Footer