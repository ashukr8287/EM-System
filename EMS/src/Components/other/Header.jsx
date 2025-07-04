import React from 'react'
import "./Header.css"

function header({data}) {
  let logoutfun=()=>{
    localStorage.removeItem("userType")
    localStorage.removeItem("userinfo")
    window.location.reload()
  }
  return (
    <div className='headerouter'>
        <div className="headerinner">
            <div className="username"><p>Hello,</p><span>{data.firstName}👋</span></div>
            <button onClick={logoutfun}>Log Out</button>
        </div>



    </div>
  )
}

export default header