import React, { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page px-5 md:px-0 mt-5">
      {/* Hero Section */}
      <section className="hero-section text-[#1A1D41] bg-gray-200 py-20 text-center mt-2 rounded-md">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg mt-4">
          I'm available for full time or freelance work, collaborations, or project
          inquiries. Feel free to reach out!
        </p>
        <div className='flex justify-center'>
          <p className="mt-6  bg-[#1A1D41] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#2c3165] transition flex items-center gap-2 w-[220px]">
          Send a Message
            <FaArrowCircleDown />
        
            
          </p>
          </div>
        
      </section>

      {/* Contact Form */}
      <div className="contact-form pt-12">
        <h2 className="text-3xl font-semibold text-center text-[#1A1D41]">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-6 max-w-3xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 border rounded-md"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 border rounded-md"
            rows="6"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#1A1D41] text-white py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="contact-details text-center my-10">
        <div className="flex flex-col  items-center text-[#1A1D41]">
            
        
       
        <p className=" flex items-center text-xl gap-2">
        <FaWhatsappSquare />

          +8801822111308
        </p>
        <p className=" flex items-center text-xl gap-2">
          <MdMarkEmailUnread />
          tanvir.ahammed.email@gmail.com
        </p>
       
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
