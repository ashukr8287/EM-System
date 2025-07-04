import React from 'react'
import "./TaskList.css"

function CompletedTask({data}) {
  return (
    <div className="innerboxes" style={{backgroundColor:"#76D987"}}>
           <div className='innerone'>
            <span id="span1">{data.category}</span>
            <span id="span2">{data.date}</span>
           </div>
           <div>
           <h3>{data.title}</h3>
           <p>{data.description}</p>
           </div>
           <div className="btndiv">
            <button className="btn1" style={{backgroundColor:"#48924f"}}>Complete</button>
            </div>
    </div>
  )
}

export default CompletedTask