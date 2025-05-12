import React from 'react';

const Features = ({ title, features }) => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-black">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <div className="mb-6 w-32 h-32 md:w-36 md:h-36">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
            <p className="text-lg text-gray-700">
              {feature.description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <span
                    key={i}
                    className="bg-yellow-400 font-semibold text-black px-1 rounded-md"
                  >
                    {part.slice(2, -2)}
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
