import React from 'react';

const Citta = () => {
    const cities = [
        'Milano', 'Roma', 'Napoli', 'Torino',
        'Firenze', 'Bologna', 'Palermo',
        'Catania', 'Bari', 'Padova'
    ];

    return (
        <div className="bg-yellow-400 py-12 px-4 text-center">
            {/* Icona in alto */}
            <div className="mb-6 flex justify-center">
                <img
                    src="/images/city.svg" // metti questa immagine nella cartella public/images/
                    alt="Icona città"
                    className="h-60" // Immagine più grande
                />
            </div>

            {/* Titolo */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Le principali città in Italia
            </h2>

            {/* Lista città */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {cities.map((city, index) => (
                    <React.Fragment key={index}>
                        <div
                            className="bg-yellow-100 text-black font-semibold px-6 py-2 rounded-full text-lg"
                        >
                            {city}
                        </div>
                        {(index === 5) && <br />} {/* A capo dopo Bologna */}
                    </React.Fragment>
                ))}
            </div>

            {/* Bottone */}
            <button
                className="text-white font-bold px-6 py-3 rounded-full text-lg"
                style={{ backgroundColor: '#00a082' }} // Colore personalizzato
            >
                Vedi tutte le città
            </button>
        </div>
    );
};

export default Citta;
