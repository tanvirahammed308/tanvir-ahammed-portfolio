import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const {id}=useParams()
    console.log("id",id);
  return (
    <div className="contact-page px-5 md:px-0 mt-5">
          {/* Hero Section */}
          <section className="hero-section text-[#1A1D41] bg-gray-200 py-20 text-center mt-2 rounded-md">
            <h1 className="text-4xl font-bold">Featured Projects & Case Studies</h1>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
            Welcome to my project showcase! Here you'll find detailed insights into some of the key web applications I've developed. Each project highlights my skills in modern frontend and backend technologies, design thinking, and problem-solving. From travel and restaurant services to organic product platforms, each build is thoughtfully crafted to solve real-world problems with responsive design, dynamic features, and user-first experience.
            </p>
            <div className="flex justify-center">
              <p className="mt-6  bg-[#1A1D41] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2c3165] transition flex items-center gap-2 w-[220px]">
                Explore Projects
                <FaArrowCircleDown />
              </p>
            </div>
          </section>
    
          {/* project card  */}
    
          
    
          {/* Contact Details */}
        </div>
  )
}

export default ProjectDetails