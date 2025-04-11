import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/img/hero.jpg";
import img2 from "../../assets/img/icons/css.png";
import img3 from "../../assets/img/icons/css.png"; // replace with your own

const images = [img1, img2, img3];

const MyWorks = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slide change interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 px-4 md:px-10 py-12 bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] rounded-xl shadow-xl">
      <h2  className='text-3xl font-bold text-[#1A1D41] capitalize py-5 text-center'>
        My Works
      </h2>

      <div className="relative w-full max-w-4xl mx-auto h-40 md:h-52 rounded-3xl overflow-hidden shadow-2xl border border-gray-300">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover absolute"
          />
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-[#1A1D41]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
