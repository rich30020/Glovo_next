import React, { useState } from 'react';

const PokeMenuItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const calculateTotalPrice = () => {
    const basePrice = parseFloat(item.price.replace(',', '.'));
    const extraPrice = selectedOptions.length * 0.5;
    return (basePrice + extraPrice) * quantity;
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 m-4">
      <div className="w-full md:w-1/2 p-4">
        <img src={item.image} alt={item.name} className="w-full rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="text-lg font-semibold mb-4">{item.price}</p>
        <p className="text-gray-600 mb-4">{item.description}</p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Scegli il formato che desideri</h3>
          <div className="flex space-x-2">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Regular</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Large +3,00 €</button>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Opzioni aggiuntive</h3>
          {['Togurt Salsa extra', 'Teriyaki extra', 'Poke salsa extra', 'Agro piccante extra', 'Olio oliva extra'].map((option) => (
            <div key={option} className="flex items-center mb-2">
              <button
                onClick={() => toggleOption(option)}
                className={`flex items-center justify-between w-full p-2 rounded-lg ${selectedOptions.includes(option) ? 'bg-green-100' : 'bg-gray-100'}`}
              >
                <span>{option} +0,50 €</span>
                <span>{selectedOptions.includes(option) ? '✓' : '+'}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
            >
              +
            </button>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Aggiungi {quantity} a {calculateTotalPrice().toFixed(2)} €
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokeMenuItem;
