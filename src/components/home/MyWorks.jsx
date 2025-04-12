

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img/hero.jpg";
import travel from "../../assets/img/projects/travel.png";
import img3 from "../../assets/img/icons/css.png"; // replace with your own

const images = [img1, travel, img3];

const MyWorks = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 px-4 md:px-5 py-5 bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] rounded-2xl shadow-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1D41] capitalize pb-8 text-center">
        My Works
      </h2>

      <div className="relative w-full max-w-xl mx-auto h-52 md:h-56 rounded-3xl overflow-hidden shadow-lg border border-gray-300 ">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-contain absolute"
          />
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out 
              ${i === index ? "bg-[#1A1D41] scale-110 shadow-md" : "bg-gray-400 hover:bg-[#1A1D41]/60"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
