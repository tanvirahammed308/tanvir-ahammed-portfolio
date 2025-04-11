import React from 'react'
import { FaArrowCircleDown } from "react-icons/fa";


const Projects = () => {
  return (
    <div className="contact-page px-5 md:px-0 mt-5">
         {/* Hero Section */}
         <section className="hero-section text-[#1A1D41] bg-gray-200 py-20 text-center mt-2 rounded-md">
  <h1 className="text-4xl font-bold">My Projects</h1>
  <p className="text-lg mt-4 max-w-2xl mx-auto">
    Here you'll find a collection of my latest and greatest work — from frontend websites to full-stack applications. Each project is a reflection of my skills, creativity, and growth as a developer.
  </p>
  <div className='flex justify-center'>
  <p className="mt-6  bg-[#1A1D41] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2c3165] transition flex items-center gap-2 w-[220px]">
    Explore Projects
    <FaArrowCircleDown />

    
  </p>
  </div>
  
</section>

   
         {/* Contact Form */}
         
   
         {/* Contact Details */}
         
       </div>
  )
}

export default Projects