import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({data}) {
  console.log(data)
  return (
    <>
     <Header data={data}/>
     <TaskListNumber data={data}/>
     <TaskList data={data}/>
    </>
  )
}

export default EmployeeDashboard