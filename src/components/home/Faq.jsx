import React, { useState } from 'react';

const faqData = [
  {
    question: "What technologies do you work with?",
    answer: "I specialize in React, Tailwind CSS, Redux, and Firebase. I also work with Node.js and Express for backend projects.",
  },
  {
    question: "Are you open for freelance work?",
    answer: "Yes! I'm currently open to freelance opportunities and collaborations. Feel free to reach out through the contact page.",
  },
  {
    question: "Do you only build front-end projects?",
    answer: "While I focus mainly on front-end, I have experience in full-stack development including backend APIs and database integration.",
  },
  {
    question: "Can I see the code of your projects?",
    answer: "Absolutely! Most of my projects are available on my GitHub. Links are provided with each project card.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2  className='text-3xl font-bold text-[#1A1D41] capitalize py-5 text-center'>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 font-semibold text-lg focus:outline-none"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-[#1A1D41] bg-gray-200 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
