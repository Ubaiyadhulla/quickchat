import React from 'react'
import api from '../api/api'
import { toast } from 'react-hot-toast';

const SignUp = ({setState}) => {

  const handleSubmit =async(e)=>{
       e.preventDefault()
       try {
        
         const res =   await api.post("/register",{
               name: e.target.name.value,
               email: e.target.email.value,
               password: e.target.password.value
           })
           toast.success(res.data.message);
           setState("login")
   
   
           e.target.reset()
       } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
       }

   }
  return (
    <form onSubmit={handleSubmit} className='w-[300px] md:w-[400px] lg:w-[500px] h-auto backdrop-blur-2xl flex flex-col  bg-white border-2 border-border rounded-2xl'>
        <h1 className='text-center font-bold text-2xl p-5 '>Create Account</h1>

        <div className=' m-5  gap-2 flex flex-col '>
        <label htmlFor="name" className='text-xl '>Name</label>
        <input type="text" placeholder='Username' id='name' name='name' className='h-10 outline-0 hover:outline-1 w-full rounded-2xl px-5'/>
        </div>

        <div className='m-5 gap-2'>
        <label htmlFor="email"className='text-xl ' >Email</label>
        <input type="email" placeholder='Email' id='email' name='email' className='h-10 outline-0 w-full rounded-2xl hover:outline-1 px-5 '/>
        </div>

        <div className='m-5 gap-2'>
        <label htmlFor="password" className='text-xl '>Password</label>
        <input type="password" placeholder='Password' id='password' name='password' className='h-10 outline-0 w-full rounded-2xl hover:outline-1 px-5'/>
        </div>

        <button className=' mx-5 bg-btnPrimary hover:bg-btnHover rounded-2xl py-5 text-bold text-2xl' type='submit'>Create Account</button>
        <p className='text-center text-xl my-4 '>If already have an account ? <span className='text-cyan-800 cursor-pointer ' onClick={()=>setState("login")}>Click here</span></p>
    </form>
  )
}

export default SignUp
