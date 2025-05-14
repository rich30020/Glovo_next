import React from 'react';

const FAQSection = ({ faqs }) => {
  return (
    <div className="w-full bg-[#f7f7f7] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 flex items-center text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Domande frequenti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
              <h3 className="text-2xl font-extrabold mb-3 text-black">{faq.question}</h3>
              <p className="text-lg text-black">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
