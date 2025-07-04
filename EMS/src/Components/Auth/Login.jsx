import React, { useState } from 'react'
import "./Login.css"

function Login({ handlelogin }) {
 let [formdata, setform]=useState({email:"",password:""})

 let changehandle=(e)=>{
    setform((currdta)=>{
        return{...currdta,[e.target.name] : e.target.value}

    })
 }
 let submithandle=(e)=>{
    e.preventDefault()
    console.log("login page",formdata)
    handlelogin(formdata.email, formdata.password);
    setform({
        email:"",
        password:""
    })
 }

  return (
    <div className='outerbox'>
        <div className='innerbox'>
        
            <form onSubmit={submithandle}>
            <h3>Log In</h3>

                <input type='email'
                 required
                 value={formdata.user}
                 placeholder='Enter your email'
                 onChange={changehandle}
                 name='email'

                 />


                 <input type="password"
                  required
                  value={formdata.password}
                  placeholder='Enter password'
                  onChange={changehandle}
                  name='password'

                  />

                  <button type='submit'>Log in</button>
            </form>

        </div>

    </div>
  )
}

export default Login