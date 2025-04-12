import React from 'react';
import Lottie from 'lottie-react';
import animation from "../../../public/Animation - 1744422543226.json";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="mt-6 bg-gray-100 rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 px-6 py-10 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1D41]">Md Tanvir Ahammed</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            I’m a passionate <span className="font-medium">React Developer</span> who builds responsive, modern, and user-focused web applications.
            <br /><br />
            I specialize in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>, and I enjoy crafting clean, functional interfaces with smooth user experiences.
            <br /><br />
            Always exploring new technologies, improving skills, and pushing front-end boundaries with a detail-oriented mindset.
            <br /><br />
            Let’s build something awesome together.
          </p>

          {/* Divider */}
          <div className="border-t pt-4 text-sm text-gray-500">Stay in Touch</div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-[#1A1D41]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a>
          </div>
        </div>

        {/* Image Section */}

        <div className="w-full md:w-1/2 p-6 flex  md:-translate-y-12">
        <Lottie 
            animationData={animation} 
            loop 
            className="w-full max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
