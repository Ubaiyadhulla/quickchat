import React, { useState } from 'react'
import Sidebar from '../componets/Sidebar'
import Dashboard from '../componets/Dashboard'
import Tasks from './Tasks'
import { TfiMenu } from "react-icons/tfi";
import Profile from '../componets/Profile';

const UserPage = () => {
  const [state,setUseState] = useState("dashboard")
  const [openMenu,setOpenMenu] = useState(false)
  return (
    <div className='grid relative '>
      <div className=''>
        <Sidebar setUseState={setUseState} state={state} />
      </div>
      <div className=''>
        <div onClick={()=>setOpenMenu(!openMenu)} className='block md:hidden my-4 mx-3 '><span><TfiMenu size={30} /></span></div>
        {state==="dashboard" && <Dashboard/>}
        {state==="tasks" && <Tasks/>}
        {state==="profile" && <Profile/>}

      </div>
      {openMenu && 
      <div className='md:hidden w-full rounded-t-2xl  fixed z-50 py-3 bottom-0 bg-bg'>
        <h3  onClick={(e)=>{setUseState("dashboard"); e.preventDefault();setOpenMenu(false)}} className={`px-3 py-4 mb-4 flex items-center justify-center text-xl font-semibold  ${state ==="dashboard" ? "border bg-white rounded" :""} `}>Dashboard</h3>
        <h3 onClick={(e)=>{setUseState("tasks"); e.preventDefault();setOpenMenu(false)}}  className={`px-3 py-4 mb-4 flex items-center justify-center text-xl font-semibold  ${state ==="tasks" ? "border bg-white rounded" :""} `}>Tasks</h3>
        <h3 onClick={(e)=>{setUseState("profile"); e.preventDefault();setOpenMenu(false)}}  className={`px-3 py-4 mb-4 flex items-center justify-center text-xl font-semibold  ${state ==="profile" ? "border bg-white rounded" :""} `}>Profile</h3>
      </div>
      }
    </div>
  )
}

export default UserPage
