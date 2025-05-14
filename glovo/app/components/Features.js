import React from 'react';

const Features = ({ title, features }) => {
  return (
    <section className="py-16 px-4 md:px-0 bg-white text-center max-w-6xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-black">{title}</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-20">
        {features.map((feature, index) => (
          <div key={index} className="flex-1 flex flex-col items-center text-center">
            <div className="mb-8 w-48 h-48 flex items-center justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-3xl font-extrabold mb-4 text-black">{feature.title}</h3>
            <p className="text-2xl text-black font-normal leading-snug">
              {feature.description.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                part.startsWith('**') && part.endsWith('**') ? (
                  <span
                    key={i}
                    className="bg-yellow-400 font-semibold text-black px-2 rounded-md inline-block"
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
