import React from 'react'
import profilepic from "../assets/profile_empty_icon.jpg"
import { FaPen } from "react-icons/fa";

const Profile = () => {
  const user = JSON.parse( localStorage.getItem("user"))
  return (
   <div className='md:ml-[200px] lg:ml-[300px] flex justify-center items-center  '>

    <div className='w-[300px] h-[400px] md:w-[400px] md:h-[600px] lg:w-[400px] lg:h-[750px] bg-bg flex flex-col justify-center items-center '>
      <div className='relative '>

      <img  className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full ' src={profilepic} alt="" />
      <span className='absolute z-50 right-5 bottom-7 cursor-pointer '> <label htmlFor='profileUpload'><FaPen  size={25} /></label></span>
      <input type="file" id="profileUpload" className="hidden" accept="image/*"  />
      </div>
      <h1 className='font-bold text-2xl my-4 '>{user?.name}</h1>
    </div>
   </div>
  )
}

export default Profile
