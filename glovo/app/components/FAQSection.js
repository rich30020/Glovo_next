import React from 'react';

const FAQSection = ({ faqs }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.418m5.398 3.987c.835.417 1.33.977 1.33 1.651 0 .684-.495 1.145-1.33 1.145-.667 0-1.152-.38-1.304-.918l-1.346-1.346a.99.99 0 00-1.311 0l-1.346 1.346c-.152.538-.637.918-1.304.918-.684 0-1.179-.495-1.33-1.33 0-.652-.496-1.152-1.33-1.152zm0 6.651c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" />
        </svg>
        <strong>Domande frequenti</strong>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
