import React from 'react'
import { useState } from 'react'
import Login from '../componets/Login.jsx'
import SignUp from '../componets/SignUp.jsx'
const Register = () => {
  const [state,setState] = useState("signup")
  return (
    <div className=' relative bg-bg h-screen  flex justify-center items-center '>
      {state === "login" ? 
      <Login setState={setState}/> : <SignUp setState={setState}/>}
      
    </div>
  )
}

export default Register
