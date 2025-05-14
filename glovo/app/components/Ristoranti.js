import React from 'react';

const Ristoranti = ({ title, ristoranti }) => {
    return (
        <section className="py-16 px-4 md:px-0 bg-white text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-black leading-tight">
                {title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-0 justify-items-center">
                {ristoranti.map((ristorante, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full shadow-lg flex items-center justify-center bg-white">
                            <img
                                src={ristorante.image}
                                alt={ristorante.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="mt-4 bg-yellow-400 text-black font-extrabold px-6 py-2 rounded-2xl text-2xl shadow-md">
                            {ristorante.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ristoranti;
