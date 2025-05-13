import React from 'react';

const SideBarSection = ({ filters }) => {
  const icons = {
    'Nelle vicinanze': 'images/icons/clock.png',
    'Valutazioni': 'images/icons/like.png',
    'Costo di consegna': 'images/icons/scooter.png',
    'Americano': 'images/icons/fries.png',
    'Fast-food': 'images/icons/fries.png',
    'Hamburger': 'images/icons/burger.png',
    'Asiatico': 'images/icons/noodles.png',
    'Carne': 'images/icons/meat.png',
    'Cinese': 'images/icons/noodles.png',
    'Dessert': 'images/icons/dessert.png',
    'Gelato': 'images/icons/ice-cream.png',
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg">
          {filters.map((filterGroup, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-4">{filterGroup.category}</h3>
              <ul>
                {filterGroup.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <img
                      src={icons[item]}
                      alt={item}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBarSection;
