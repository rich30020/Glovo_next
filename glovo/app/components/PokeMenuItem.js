import React from 'react';
import PokeMenuItem from './PokeMenuItem';

const pokeItems = [
  {
    name: 'Salmon pokè',
    description: 'Base riso sushi, salmone, edamame, alghe nori, carota giapponese, avocado, salsa avocado, furikake, uova di pesce, cipolla fritta',
    price: 10.90,
    image: '/images/salmonepoke.jpg',
  },
  {
    name: 'Tonno pokè',
    description: 'Base riso sushi, tonno, surimi, barbabietola rossa, mais, cetriolo, wasabi mayo, furikake, sesamo e cipollotti',
    price: 10.90,
    image: '/images/tonnopoke.jpg',
  },
  {
    name: 'Tofu pokè',
    description: 'Base riso sushi, tofu, barbabietola rossa, carote, alghe nori, mais, salsa di sesamo, cipollotti, peperoncino e aglio fritto',
    price: 10.90,
    image: '/images/tofupoke.jpg',
  },
];

const PokeMenuList = () => (
  <div>
    <h2 className="text-4xl font-bold mb-6">Pokè</h2>
    {pokeItems.map((item, idx) => (
      <PokeMenuItem key={idx} item={item} />
    ))}
  </div>
);

export default PokeMenuList;
