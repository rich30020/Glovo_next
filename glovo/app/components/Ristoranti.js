import React from 'react';

const Ristoranti = ({ title, ristoranti }) => {
    return (
        <section className="py-16 px-4 md:px-12 bg-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-black">{title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-6 justify-items-center">
                {ristoranti.map((ristorante, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-[40%] shadow-md">
                            <img
                                src={ristorante.image}
                                alt={ristorante.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="mt-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-base shadow-sm">
                            {ristorante.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Ristoranti;
