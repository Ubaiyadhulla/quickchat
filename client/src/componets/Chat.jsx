import React from 'react'
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS , ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);


const Chat = ({values}) => {
    const data = {
        labels:["Completed Tasks","Pending Tasks"],
        datasets:[{
            data: values,
            backgroundColor: [ "#3b82f6", "#facc15"],
            borderWidth: 1,
        }]
    }
  return (
    <div>
      <Pie data={data} />
    </div>
  )
}

export default Chat
