import React from "react";
import hero from "../../assets/img/hero.jpg";
import { useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Tanvir Ahammed"],
    loop: 0,
  });

  return (
    <section className="mt-6 bg-gray-200 rounded-md overflow-hidden shadow-lg">
      <div className="flex flex-col  md:flex-row-reverse items-center">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={hero}
            alt="Tanvir Ahammed"
            className="w-full h-full object-cover rounded-t-md md:rounded-none md:rounded-l-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center justify-center space-y-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Hi, This is
            <span className="block text-4xl font-bold text-[#1A1D41] h-16 md:h-8">
              {text}
            </span>
          </h3>
          <p className="text-gray-700 max-w-md">
            A passionate React developer building modern, user-friendly, and scalable web applications.
          </p>

          <div className="divider w-full text-sm text-gray-600">Stay in Touch</div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl text-[#1A1D41]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
