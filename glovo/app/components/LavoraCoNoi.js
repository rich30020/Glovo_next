import React from 'react';

const LavoraConNoi = ({ sezioni }) => {
  return (
    <div className="bg-[#e8f9f7] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {sezioni.map((sezione, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-teal-600">
                <img
                  src={sezione.image}
                  alt={sezione.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">{sezione.title}</h2>
            <p className="text-gray-700 mb-6">{sezione.description}</p>
            <a
              href={sezione.buttonLink}
              className="text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 inline-block"
              style={{ backgroundColor: '#00a082' }}
            >
              {sezione.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LavoraConNoi;
