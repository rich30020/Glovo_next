import React from 'react';

const NavbarSection = ({ deliveryLocation }) => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Glovo a sinistra */}
        <div className="flex items-center">
          <img src="/images/logo.svg" alt="Glovo Logo" className="h-10" />
        </div>

        {/* Parte destra */}
        <div className="flex items-center space-x-6">
          {/* Posizione */}
          <div className="flex items-center">
            <span className="text-green-500 mr-2">📍</span>
            <span className="text-gray-700">{deliveryLocation}</span>
          </div>

          {/* Bottone login */}
          <a
            href="/login"
            className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 20c0-2.2 3-4 6-4s6 1.8 6 4" />
            </svg>
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavbarSection;
