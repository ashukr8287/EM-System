import React, { useContext, useState, useEffect } from 'react';
import Login from "./Components/Auth/Login";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { Authdata } from './Context/AuthContext';

function App() {
  const userdata = useContext(Authdata);
  const [user, setUser] = useState(null);
  let userinforation = JSON.parse(localStorage.getItem("userinfo"));

  
  

  useEffect(()=>{
    let logindata=localStorage.getItem("userType")
    if(logindata){
      setUser(logindata)
      
    }
  },[user])


  

  const handlefun = (email, password) => {
    if (userdata){
      let employee=userdata.employee.find((e)=> e.email===email && e.password===password);
      let admin=userdata.admin.find((e)=>e.email===email && e.password===password);
      if(employee){
        setUser("employee")
        localStorage.setItem("userType","employee");
        localStorage.setItem("userinfo",JSON.stringify(employee))
        
      }else if(admin){
        setUser("admin")
          localStorage.setItem("userType","admin");
          localStorage.setItem("userinfo",JSON.stringify(admin))
      }else{
        alert("Invallid User")
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handlelogin={handlefun} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={userinforation} />
      ) : (
        <AdminDashboard   data={userinforation} />
      )}
    </>
  );
}

export default App;
