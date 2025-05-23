import React, { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";

const Projects = () => {
  const [projects,setProjects]=useState([]);

  

  useEffect(()=>{
    fetch("/projects.json")
    .then(res=>res.json())
    .then((data)=>setProjects(data))
  },[])

  return (
    <div className="contact-page px-5 md:px-0 mt-5">
      {/* Hero Section */}
      <section className="hero-section text-[#1A1D41] bg-gray-200 py-20 text-center mt-2 rounded-md">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Here you'll find a collection of my latest and greatest work — from
          frontend websites to full-stack applications. Each project is a
          reflection of my skills, creativity, and growth as a developer.
        </p>
        <div className="flex justify-center">
          <p className="mt-6  bg-[#1A1D41] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2c3165] transition flex items-center gap-2 w-[220px]">
            Explore Projects
            <FaArrowCircleDown />
          </p>
        </div>
      </section>

      {/* project card  */}

      <section className="mt-6 bg-gray-200 rounded-md overflow-hidden shadow-lg">
        {
          projects.map((project,index)=><div key={index} className="flex flex-col  md:flex-row items-center px-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={project.img}
              alt="img"
              className="w-full h-full object-cover rounded-t-md md:rounded-none md:rounded-l-md"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-[#1A1D41] ">
             {project.name}
            </h3>
            <p className="text-gray-700 max-w-md">
              {project.description}
            </p>

            <div className="divider w-full text-sm text-gray-600">
              More Options
            </div>

            {/* button */}

            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
              <Link to={project.liveLink}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center text-xl">
                    Live
                    <IoIosSend />
                  </span>
                </button>
              </Link>
              <Link to={project.gitLink}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center text-xl">
                    Git
                    <IoIosSend />
                  </span>
                </button>
              </Link>
              <Link to={`/projects/${project.id}`}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5  transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center text-xl">
                    Details
                    <IoIosSend />
                  </span>
                </button>
              </Link>
            </div>

            {/* Social Icons */}

            <div className="flex gap-5 text-xl text-[#1A1D41]">
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a>
                     <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                   </div>
          </div>
        </div>)
        }
      </section>

      {/* Contact Details */}
    </div>
  );
};

export default Projects;
