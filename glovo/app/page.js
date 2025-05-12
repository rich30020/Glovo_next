import React from 'react';
import LandingHero from './components/LandingHero';
import Ristoranti from './components/Ristoranti';
import Features from './components/Features';
import Citta from './components/Citta';
import ScaricaApp from './components/ScaricaApp';
import LavoraConNoi from './components/LavoraCoNoi';

const HomePage = () => {
  const heroProps = {
    title: 'Consegna di cibo a domicilio e molto altro',
    subtitle: 'Generi alimentari, negozi, farmacie, qualsiasi cosa!',
    imageSrc: '/images/panino.png',
  };

  const ristorantiData = [
    { name: "McDonald's", image: '/images/mc.jpg' },
    { name: 'Burger King', image: '/images/burger.jpg' },
    { name: 'Carrefour', image: '/images/carrefour.jpg' },
    { name: 'Poke House', image: '/images/poke.jpg' },
    { name: 'Old Wild West', image: '/images/oldwild.jpg' },
    { name: 'Burgez', image: '/images/burgez.jpg' },
    { name: 'Spontini', image: '/images/spontini.jpg' },
    { name: 'KFC', image: '/images/kfc.jpg' },
  ];

  const featuresData = [
    {
      image: '/images/logo_rest.svg',
      title: 'I migliori ristoranti della tua città',
      description:
        'Approfitta di un\'ampia varietà di ristoranti per ordinare i tuoi piatti preferiti oppure **trovane di nuovi nei dintorni!**',
    },
    {
      image: '/images/delivery.svg',
      title: 'Consegna rapida',
      description:
        'Siamo velocissimi! Ordina o invia qualsiasi cosa nella tua città: **lo riceverai nel giro di qualche minuto**',
    },
  ];

  const lavoraConNoiData = [
    {
      image: '/images/rider.png', // cambia in base al tuo file
      title: 'Diventa un rider',
      description:
        'Goditi flessibilità, libertà e guadagni competitivi effettuando consegne tramite Glovo.',
      buttonText: 'Registrati qui',
      buttonLink: '#', // metti il link corretto
    },
    {
      image: '/images/partner.png', // cambia in base al tuo file
      title: 'Diventa partner',
      description:
        'Cresci con Glovo! La nostra tecnologia e la nostra base di utenti possono aiutarti a incrementare le vendite e cogliere nuove opportunità!',
      buttonText: 'Registrati qui',
      buttonLink: '#', // metti il link corretto
    },
  ];

  return (
    <div>
      <LandingHero {...heroProps} />
      <Ristoranti
        title="Italia: i migliori ristoranti e molto altro"
        ristoranti={ristorantiData}
      />
      <Features title="Consegniamo tutto ciò che vuoi" features={featuresData} />
      <Citta />
      <LavoraConNoi sezioni={lavoraConNoiData} />
      <ScaricaApp />
    </div>
  );
};

export default HomePage;
