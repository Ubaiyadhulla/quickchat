import React, { useEffect } from 'react'
import { MdAdd } from "react-icons/md";
import { dummyTasksData } from '../assets/assets';
import { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import api from '../api/api';
import { toast } from 'react-hot-toast';


const Tasks = () => {

  const [taskOpen ,setTaskOpen] = useState(false);
  const [task,setTask] = useState([]);

  const handlesubmit = async (e)=>{
    e.preventDefault();
    try {
      const res = await api.post("/tasks",{
        title: e.target[0].value,
        duedate: e.target[1].value,
        status: e.target[2].value
      }, {
        headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
        }
     })
      if(res.status === 201){
        toast.success(res.data.message);
        setTaskOpen(false);
        fetchTasks();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!" );
    }
  }
  

  const fetchTasks = async()=>{
    try {
      const res = await api.get('/tasks',{
         headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setTask(res.data.tasks);
      console.log(res.data.tasks);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTasks();
  },[])
  return (
    <div className='md:ml-[200px] lg:ml-[300px] relative'>
      <div className='flex justify-end z-40 '>
        <button onClick={()=>setTaskOpen(!taskOpen)} className='flex gap-4 bg-blue-400 rounded-2xl p-3 items-center mx-5  my-5 '><span><MdAdd /></span> Add Tasks</button>
      </div>
      
      <div className='z-40 '>
        <h1 className='font-semibold text-3xl flex '>Tasks</h1>
        <div>
            {task.map((task,index)=>(
             <div key={index} className='border border-gray-300 rounded-lg p-4 m-4 flex justify-around lg:justify-between items-center'>
                <h2 className='font-normal text-xl'>{task.title}</h2>
                <div className=' flex gap-14 lg:32'>
                <p>{new Date(task.duedate).toLocaleDateString()}</p>
                <p className={task.status === "Completed" ? "text-green-500" : "text-red-500"}> {task.status}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

{/* add tasks */}
{ taskOpen && 

      <div className='absolute flex inset-0 items-center justify-center z-50 top-32'>
        <form onSubmit={handlesubmit} className=' inset-0 rounded-2xl  bg-bg flex flex-col justify-center  items-center    w-[300px] h-[350px] lg:w-[400px] lg:h-[400px]'>
          <div className='flex items-center justify-between w-full px-5 mb-5'>
          <h1 className=' text-2xl font-bold '>New task</h1>
          <span onClick={()=>setTaskOpen(!taskOpen)}><MdOutlineClose  size={25}/></span>
          </div>
            <input className='w-[90%] px-5 py-3 my-2 rounded-lg outline-1' type="text" required  placeholder='Add a new task'/>
            <input className='w-[90%]  py-3 px-7 rounded-lg my-2 outline-1' type="date" required  placeholder='Add a due date'/>
            <select className='w-[90%]  py-3 px-6 rounded-lg my-2 outline-1'>
                  <option>Pending</option>
                  <option>Completed</option>
            </select>
            <button className='bg-blue-200 w-[90%] items-center py-4 mt-4 rounded-2xl text-2xl'  type="submit">Add Task</button>
        </form>
      </div>
    }

    

    </div>
  )
}

export default Tasks
