import React, { useState } from 'react';
import { MdClose, MdOutlineMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="relative z-50 bg-[#1a1d41] text-white px-4 py-6 md:py-3 md:rounded shadow-xl w-full lg:max-w-[1300px] mx-auto flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">Tanvir</Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 rubik font-semibold">
        <Link to="/" className="flex items-center gap-1">
          <FaHome /> Home
        </Link>
        <Link to="/projects" className="flex items-center gap-1">
          <BiSolidCategory /> Projects
        </Link>
        <Link to="/about" className="flex items-center gap-1">
          <FaClipboardList /> About Me
        </Link>
        <Link to="/contact" className="flex items-center gap-1">
          <GrContact /> Contact
        </Link>
      </div>

      {/* Desktop Hire Me Button */}
      <div className="hidden md:block">
        <button className="border-2 border-white px-4 py-1 rounded-md font-bold capitalize hover:bg-white hover:text-[#1a1d41] transition-all">
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={mobileMenuToggle} className="text-white">
          {mobileMenuOpen ? <MdClose size={26} /> : <MdOutlineMenuOpen size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 bg-[#1a1d41] w-[250px] p-6 rounded-md shadow-md space-y-6 flex flex-col text-left md:hidden z-40">
          <Link to="/" onClick={mobileMenuToggle} className="flex items-center gap-2 text-lg">
            <FaHome /> Home
          </Link>
          <Link to="/projects" onClick={mobileMenuToggle} className="flex items-center gap-2 text-lg">
            <BiSolidCategory /> Projects
          </Link>
          <Link to="/about" onClick={mobileMenuToggle} className="flex items-center gap-2 text-lg">
            <FaClipboardList /> About Me
          </Link>
          <Link to="/contact" onClick={mobileMenuToggle} className="flex items-center gap-2 text-lg">
            <GrContact /> Contact
          </Link>
          <button className="border-2 border-white px-4 py-1 rounded-md font-bold capitalize hover:bg-white hover:text-[#1a1d41] transition-all">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
