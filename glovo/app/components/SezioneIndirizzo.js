import React from 'react';

const SezioneIndirizzo = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 flex justify-center">
      <div className="bg-white w-full max-w-2xl md:h-[600px] h-[80vh] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-lg">
        {/* Bottone chiusura (solo estetico) */}
        <div className="absolute top-4 right-4 text-gray-400 text-2xl font-bold cursor-default select-none">
          ×
        </div>

        {/* Titolo */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Dove dobbiamo consegnare l'ordine?
        </h2>

        {/* Campo ricerca indirizzo */}
        <div className="px-4 py-2">
          <div className="flex items-center border border-green-700 rounded-full px-4 py-3">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M5 11a7 7 0 1114 0 7 7 0 01-14 0z" />
            </svg>
            <input
              type="text"
              placeholder="Cerca indirizzo"
              className="w-full focus:outline-none text-sm text-gray-700 placeholder-gray-400"
              disabled
            />
          </div>
        </div>

        {/* Scroll interno (finto contenuto per altezza) */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="h-[300px]"></div>
        </div>

        {/* Bottone in basso */}
        <div className="px-4 pb-4">
          <button className="w-full bg-green-100 text-green-700 font-semibold py-3 rounded-full" disabled>
            Usa la posizione attuale
          </button>
        </div>
      </div>
    </section>
  );
};

export default SezioneIndirizzo;
