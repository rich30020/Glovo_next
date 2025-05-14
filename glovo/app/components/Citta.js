import React from 'react';

const Citta = () => {
    const cities = [
        'Milano', 'Roma', 'Napoli', 'Torino',
        'Firenze', 'Bologna', 'Palermo',
        'Catania', 'Bari', 'Padova'
    ];

    return (
        <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center px-4">
            {/* Icona in alto */}
            <div className="mb-8 flex justify-center">
                <img
                    src="/images/city.svg"
                    alt="Icona città"
                    className="h-40 md:h-52"
                />
            </div>

            {/* Titolo */}
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-black">
                Le principali città in Italia
            </h2>

            {/* Lista città */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 mb-14 max-w-4xl">
                {cities.map((city, index) => (
                    <div
                        key={city}
                        className="bg-yellow-100 text-black font-bold px-12 py-4 rounded-full text-2xl shadow-sm"
                    >
                        {city}
                    </div>
                ))}
            </div>

            {/* Bottone */}
            <button
                className="text-white font-bold px-12 py-5 rounded-full text-2xl w-full max-w-xl"
                style={{ backgroundColor: '#00a082' }}
            >
                Vedi tutte le città
            </button>
        </div>
    );
};

export default Citta;
