import "./AllTask.css";
import React, { useContext } from 'react';
import { Authdata } from "../../Context/AuthContext";

function AllTask() {
  const userdata = useContext(Authdata);
  const employee = userdata.employee;

  if (!employee) {
    return (
      <div className="main">
      <h2 className="Loading">Loading employee data...</h2>
      </div>
    )
  }

  return (
    <div className="alltaskouter">
      <ul className="ul">
        <li className="li">Employee Name</li>
        <li className="li">New Task</li>
        <li className="li">Active Task</li>
        <li className="li">Complete Task</li>
        <li className="li">Failed Task</li>
      </ul>

      <div className="alltaskinner">
  {
    employee.map((emp, index) => (
      <ul className="ull" key={index}>
        <li className="lii">{emp.firstName}</li>
        <li className="lii">{emp.taskNumbers.newTask}</li>
        <li className="lii">{emp.taskNumbers.active}</li>
        <li className="lii">{emp.taskNumbers.completed}</li>
        <li className="lii">{emp.taskNumbers.failed}</li>
      </ul>
    ))
  }
</div>


    </div>
  );
}

export default AllTask;
