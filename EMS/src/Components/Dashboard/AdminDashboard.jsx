import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

function AdminDashboard({data}) {
  return (
    <>
      <Header data={data}/>
      <CreateTask/>
      <AllTask data={data}/>
    </>
  )
}

export default AdminDashboard