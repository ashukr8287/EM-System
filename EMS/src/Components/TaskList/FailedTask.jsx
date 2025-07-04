import React from 'react'
import "./TaskList.css"

function FailedTask({data}) {
  return (
    <div className="innerboxes" style={{backgroundColor:"#E97A74"}}>
           <div className='innerone'>
            <span id="span1">{data.category}</span>
            <span id="span2">{data.date}</span>
           </div>
           <div>
           <h3>{data.title}</h3>
           <p>{data.description}</p>
           </div>
           <div className="btndiv">
            <button className="btn1" style={{backgroundColor:"red"}}>Failed</button>
            </div>
    </div>
  )
}

export default FailedTask