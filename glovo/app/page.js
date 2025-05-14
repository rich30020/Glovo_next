'use client';

import React, { useState } from 'react';
import NavbarSection from './components/NavbarSection';
import SideBar from './components/SideBar';
import LandingHero from './components/LandingHero';
import Ristoranti from './components/Ristoranti';
import Features from './components/Features';
import Citta from './components/Citta';
import ScaricaApp from './components/ScaricaApp';
import LavoraConNoi from './components/LavoraCoNoi';
import Privacy from './components/Privacy';
import PokeMenuItem from './components/PokeMenuItem';
import FAQSection from './components/FAQSection';
import Restoraint from './components/Restoraint';
import Footer from './components/Footer';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokeItem, setSelectedPokeItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedPokeItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokeItem(null);
  };

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
      description: 'Approfitta di un\'ampia varietà di ristoranti per ordinare i tuoi piatti preferiti oppure **trovane di nuovi nei dintorni!**',
    },
    {
      image: '/images/delivery.svg',
      title: 'Consegna rapida',
      description: 'Siamo velocissimi! Ordina o invia qualsiasi cosa nella tua città: **lo riceverai nel giro di qualche minuto**',
    },
  ];

  const lavoraConNoiData = [
    {
      image: '/images/rider.png',
      title: 'Diventa un rider',
      description: 'Goditi flessibilità, libertà e guadagni competitivi effettuando consegne tramite Glovo.',
      buttonText: 'Registrati qui',
      buttonLink: '#',
    },
    {
      image: '/images/partner.png',
      title: 'Diventa partner',
      description: 'Cresci con Glovo! La nostra tecnologia e la nostra base di utenti possono aiutarti a incrementare le vendite e cogliere nuove opportunità!',
      buttonText: 'Registrati qui',
      buttonLink: '#',
    },
  ];

  const sidebarFilters = [
    { category: 'Ordina per', items: ['Nelle vicinanze', 'Valutazioni', 'Costo di consegna'] },
    { category: 'Filtri più usati', items: ['Americano', 'Fast-food', 'Hamburger'] },
    { category: 'Altri filtri', items: ['Asiatico', 'Carne', 'Cinese', 'Dessert', 'Gelato'] },
  ];

  const pokeItems = [
    {
      name: 'Salmone pokè',
      description: 'Base riso sushi, tonno, alghe nori, cavolo rosso, carote, surimi, salsa sriracha, peperoncino, uova di pesce e cipolla fritta',
      price: '10,90 €',
      image: '/images/salmonepoke.jpg',
    },
    {
      name: 'Tofu pokè',
      description: 'Base riso sushi, tonno, alghe nori, cavolo rosso, carote, surimi, salsa sriracha, peperoncino, uova di pesce e cipolla fritta',
      price: '10,90 €',
      image: '/images/tofupoke.jpg',
    },
    {
      name: 'Spicy pokè',
      description: 'Base riso sushi, tonno, alghe nori, cavolo rosso, carote, surimi, salsa sriracha, peperoncino, uova di pesce e cipolla fritta',
      price: '10,90 €',
      image: '/images/tonnopoke.jpg',
    }
  ];

  const faqs = [
    {
      question: 'Poké Club offre delle promozioni su Glovo?',
      answer: 'Cerca sempre i prodotti scontati e le offerte speciali in corso, sono evidenziate in giallo. A volte potrai trovare anche offerte speciali come 2x1 o consegna a prezzo scontato!',
    },
    {
      question: 'È prevista una spesa minima da Poké Club?',
      answer: "Poké Club prevede un minimo d'ordine. Ma non preoccuparti. Se non dovessi raggiungerlo, pagherai soltanto un supplemento, ma ti consegneremo comunque il tuo glovo a domicilio!",
    },
    {
      question: 'Poké Club è disponibile su Prime?',
      answer: 'Sì. Prime è il programma di abbonamento di Glovo che ti permette di usufruire gratuitamente di consegne illimitate da alcuni dei nostri partner e di altri vantaggi!',
    },
  ];

  return (
    <div className="flex flex-col">
      <NavbarSection deliveryLocation="Roma, Italia" />

      <section className="bg-yellow-50 py-14">
        <LandingHero {...heroProps} />
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <SideBar filters={sidebarFilters} />
        </div>
      </section>

      <section className="bg-white py-10">
        <Ristoranti title="Italia: i migliori ristoranti e molto altro" ristoranti={ristorantiData} />
      </section>

      <Restoraint />

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Menu Pokè</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pokeItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <p className="text-md font-bold text-green-600 mt-2">{item.price}</p>
                <button
                  onClick={() => handleOpenModal(item)}
                  className="mt-3 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                >
                  Personalizza
                </button>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && selectedPokeItem && (
          <PokeMenuItem item={selectedPokeItem} onClose={handleCloseModal} />
        )}
      </section>

      <section className="bg-white py-14">
        <Features title="Consegniamo tutto ciò che vuoi" features={featuresData} />
      </section>

      <section className="bg-yellow-50 py-14">
        <LavoraConNoi sezioni={lavoraConNoiData} />
      </section>

      <section className="bg-white py-14">
        <Citta />
      </section>

      <section className="bg-gray-50 py-14">
        <FAQSection faqs={faqs} />
      </section>

      <section className="bg-white py-14">
        <ScaricaApp />
      </section>

      {/* <section className="bg-gray-100 py-14">
        <Privacy
          title="Gestisci i tuoi cookie"
          description="Utilizziamo cookie propri e di terze parti e altre tecnologie per offrirti il miglior servizio possibile, analizzare l'utilizzo della nostra piattaforma e fornirti annunci personalizzati. Puoi modificare le impostazioni dei cookie in qualsiasi momento."
          moreInfoText="Ulteriori informazioni"
          rejectText="Rifiuta"
          acceptText="Accetta tutti"
        />
      </section> */}

      <Footer />
    </div>
  );
};

export default HomePage;
