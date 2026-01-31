import React from 'react'
import api from '../api/api'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-hot-toast';

const Login = ({setState}) => {
  const navigate = useNavigate();

   const handleSubmit =async (e)=>{
       e.preventDefault()
        try {
          const res = await api.post("/login",{email:e.target.email.value,password:e.target.password.value})
          console.log("LOGIN RESPONSE:", res.data);
          toast.success(res.data.message);
          if(res.status === 200){
            localStorage.setItem("user",JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.token);
            console.log(res.data.token)
            navigate('/userpage')
          }
          
          
          e.target.reset()
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }

   }

  return (
    <form className='w-[300px] md:w-[400px] lg:w-[500px] h-auto backdrop-blur-2xl flex flex-col  bg-white border-2 border-border rounded-2xl' onSubmit={handleSubmit}  >
        <h1 className='text-2xl font-bold text-center m-5 '>welcome!</h1>

        <div className=' ml-5 justify-start flex flex-col gap-2 my-5'>
        <label className='text-xl' htmlFor="email"> your Email</label>
        <input type="email" placeholder=' email' id='email' name='email' className='w-full border-none rounded-3xl active:border-blue-300 h-10 p-5' />
        </div>
        
        <div className='ml-5 justify-start flex flex-col gap-2 my-5'>
        <label  className='text-xl' htmlFor="password"> your Password</label>
        <input type="password" placeholder='password'  id='password'name='password' className='w-full border-none rounded-3xl active:border-blue-300 h-10 p-5'/>
        </div>

        <button className='bg-btnPrimary mx-5 rounded py-4 font-stretch-50% hover:bg-btnHover mt-4 text-xl' type='submit' >Login</button>
        <p className=' text-center my-5 text-xl'>if you want to create account ? <span className='text-cyan-800 py-4 cursor-pointer' onClick={()=>setState("signup")}>Click here</span></p>
    </form>
  )
}

export default Login
