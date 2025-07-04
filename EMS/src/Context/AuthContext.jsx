import React, {  createContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage'

export const Authdata = createContext();
  function AuthContext({children}) { 
    let [userdata,setuserdata]=useState()
    useEffect(() => {
      setlocalstorage()
      let {employee,admin}=getlocalstorage()
      setuserdata({employee,admin})
    }, [])
    


    return (
      <div>
        <Authdata.Provider value={userdata}>
        {children}
        </Authdata.Provider>
        
      </div>
    )
  }
  
  export default AuthContext