import React from 'react'
import { GrTasks } from "react-icons/gr";
import { SiGoogletasks } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import Chat from './Chat.jsx';
import { dummyTasksData } from '../assets/assets.js';
import api from '../api/api.js';
import { useEffect ,useState} from 'react';

const Dashboard = () => {
  
  const [pendingTasks,setPendingTasks] = useState();
  const [completedTasks,setCompletedTasks]= useState();
  const [totaltasks,setTotalTasks] = useState([])


  const remainingTasks =async()=>{
    try {
      const res = await api.get('/tasks',{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      setTotalTasks(res.data.tasks.filter(task=>task.status==="Pending"))
      setPendingTasks(res.data.tasks.filter(task=>task.status==="Pending").length)
      setCompletedTasks(res.data.tasks.filter(task=>task.status==="Completed").length)
      
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(()=>{
    remainingTasks();
  },[])
  return (
    <div className='md:ml-[200px] lg:ml-[300px]'>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 my-10  gap-5'>
       <div className='flex justify-between border bg-bg rounded w-[250px] items-center p-4'>
          <div className='flex gap-4 items-center text-xl'>
            <GrTasks size={30} />
            <h1>Total task</h1>
          </div>
           <p className='text-2xl '>11</p>
       </div>

       <div className='flex justify-between border bg-bg rounded w-[250px] items-center p-4'>
          <div  className='flex gap-4 items-center text-xl'>
            <FaTasks size={30} />
            <h1>Pending tasks</h1>
          </div>
           <p className='text-2xl '>6</p>
       </div>

       <div className='flex justify-between border bg-bg rounded w-[250px] items-center p-4'>
          <div  className='flex gap-4 items-center text-xl'>
            <SiGoogletasks size={30} />
            <h1>completed tasks</h1>
          </div>
           <p className='text-2xl '>5</p>
       </div>
      </div>


      <div className='w-[300px] lg:w-[800px] ml-22 mt-14 mb-14 flex items-center justify-center'>
        <Chat values={[completedTasks,pendingTasks]}/>
      </div>
        

      <br/>
      <div>
        <h1 className='text-2xl p-5 font-semibold'>Pending tasks</h1>
        {totaltasks.map((task,index)=>(
         <div key={index} className="border p-3 rounded rounded-3xlmb-2 m-4" >
          <div className='flex justify-around   lg:justify-between pr-5 '>
            <h1 className=''>{task.title}</h1>
            <div className='flex gap-14  lg:gap-32 '>
              <h4>{task.duedate}</h4>
              <h4  className={`${task.status === "completed" ? "text-green-500" : "text-red-500"}`}>{task.status}</h4>
            </div>
          </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard
