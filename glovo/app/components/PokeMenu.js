import React from 'react';

const PokeMenu = ({ pokeItems }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Pokè</h2>
      <div className="space-y-4">
        {pokeItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-start">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold">{item.price}</span>
              <button className="bg-green-500 text-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeMenu;
