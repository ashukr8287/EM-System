import React from 'react'
import "./TaskList.css"

function NewTask({data}) {
  return (
    <div className="innerboxes" style={{backgroundColor:"#6CA6F4"}}>
          <div className='innerone'>
               <span id="span1">{data.category}</span>
               <span id="span2">{data.date}</span>
          </div>
            <div>
           <h3>{data.title}</h3>
           <p>{data.description}</p>
           </div>
           <div className="btndiv">
            <button className="btn1">Accept Task</button>
            </div>
    </div>
  )
}

export default NewTask