import React from 'react'

import Navbar from '../components/header/Navbar'
import Footer from '../components/Footer/Footer'

import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar/>
        
        
       <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root