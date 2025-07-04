import React from 'react'
import "./TaskList.css"

function AcceptTask({data}) {
  return (
    <div className="innerboxes" style={{backgroundColor:"#F6CC3F"}}>
           <div className='innerone'>
            <span id="span1">{data.category}</span>
            <span id="span2">{data.date}</span>
           </div>
           <div>
           <h3>{data.title}</h3>
           <p>{data.description}</p>
           </div>
           <div className="btndiv">
            <button className="btn1" style={{backgroundColor:"#48924F"}}>Mark As Completed</button>
            <button className="btn2" style={{backgroundColor:"red"}}>Mark As Failed</button>
           </div>
    </div>
    
  )
}

export default AcceptTask