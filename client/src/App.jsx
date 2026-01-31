import React from 'react'
import { Route,Routes } from 'react-router'

import Register from './pages/Register.jsx'
import UserPage from './pages/UserPage.jsx'
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}/>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/userpage' element={<UserPage/>} />
      </Routes>
    </div>
  )
}

export default App
