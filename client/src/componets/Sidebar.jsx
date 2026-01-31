import React from 'react'

const Sidebar = ({ setUseState,state }) => {
  return (
    <div className='fixed bg-bg h-screen md:flex  md:flex-col gap-3 hidden md:w-[200px] lg:w-[300px]  md:items-end md:pt-26 '>
        <a href=""  className={`text-xl font-semibold px-10 w-full  ${state ==="dashboard" ? "border bg-white rounded" :""} `} onClick={(e)=>{setUseState("dashboard"); e.preventDefault()}}>DashBoard</a>
        <a href=""  className={`text-xl font-semibold px-10 w-full  ${state ==="tasks" ? "border bg-white rounded" :""}  `} onClick={(e)=>{setUseState("tasks"); e.preventDefault()}}>Tasks</a>
        <a href=""  className={`text-xl font-semibold px-10  w-full   ${state ==="profile" ? "border bg-white rounded" :""} `} onClick={(e)=>{setUseState("profile"); e.preventDefault()}}>Profile</a>

      
    </div>
  )
}

export default Sidebar
 