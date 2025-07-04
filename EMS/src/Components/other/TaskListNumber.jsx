import React from 'react'
import "./TaskListNumber.css"


function TaskListNumber({data}) {
  return (
    <div className="TaskListNumberouter">
        <div className="TaskListNumberinner">
            <div className="TaskListNumberinnerboxes" style={{backgroundColor:"#6CA6F4"}}>
                <h2>{data.taskNumbers.newTask}</h2>
                <h3>New Task</h3>
            </div>

            <div className="TaskListNumberinnerboxes" style={{backgroundColor:"#76d987"}}>
                <h2>{data.taskNumbers.completed}</h2>
                <h3>Completed Task</h3>
            </div>

            <div className="TaskListNumberinnerboxes" style={{backgroundColor:"#F6CC3F" ,color:"black"}}>
                <h2>{data.taskNumbers.active}</h2>
                <h3>Accepted Task</h3>
            </div>

            <div className="TaskListNumberinnerboxes" style={{backgroundColor:"#E97A74"}}>
                <h2>{data.taskNumbers.failed}</h2>
                <h3>Failed Task</h3>
            </div>

        </div>

    </div>
  )
}

export default TaskListNumber