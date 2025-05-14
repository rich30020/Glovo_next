import React from 'react';

const NavbarSection = ({ deliveryLocation }) => {
  return (
    <section className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center h-auto md:h-20 gap-4 md:gap-0">
        {/* Logo Glovo */}
        <div className="flex items-center flex-shrink-0">
          <img src="/images/logo.svg" alt="Glovo Logo" className="h-10 md:h-12" />
        </div>

        {/* Centro: posizione */}
        <div className="w-full md:flex-1 flex justify-center">
          <div className="flex items-center flex-wrap justify-center">
            <span className="mr-1 text-lg md:text-xl">%</span>
            <span className="font-bold text-lg md:text-2xl mr-1">Consegne in</span>
            <span className="font-bold text-emerald-600 text-lg md:text-2xl">{deliveryLocation}</span>
            <svg className="ml-1 w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Bottone login */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <a
            href="/login"
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors text-white px-6 md:px-10 py-2 md:py-3 rounded-full text-base md:text-lg font-bold flex items-center gap-2 shadow-none w-full md:w-auto justify-center"
            style={{ minWidth: 120, maxWidth: 220 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="8" r="4" />
              <path d="M3 20c0-2.2 5-4 8-4s8 1.8 8 4" />
            </svg>
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavbarSection;
