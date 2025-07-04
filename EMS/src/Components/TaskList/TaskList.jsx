import React from 'react'
import "./TaskList.css"
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
   
    <div className="TaskListouter">
      <div className="TaskListinner">
        {
          data.tasks.map((elem,key)=>{
            if(elem.active){
              return <AcceptTask key={key} data={elem}/>
            }
            if(elem.newTask){
              return <NewTask key={key} data={elem}/>
            }
            if(elem.failed){
              return <FailedTask key={key} data={elem}/>
            }
            if(elem.completed){
              return <CompletedTask key={key} data={elem}/>
            }
          })

        } 
      </div>
   
    </div>
  )
}

export default TaskList