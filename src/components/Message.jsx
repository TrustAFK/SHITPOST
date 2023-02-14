import React from 'react'
import "./Message.css";
function Message({content , keys}) {
  return (
    <div className="message_container">
    <div className='Message'>
{content}

    </div>
    </div>
  )
}

export default Message