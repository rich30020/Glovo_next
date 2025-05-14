import React from 'react';

const LandingHero = ({ title, subtitle, imageSrc }) => {
    return (
        <div className="relative min-h-[90vh] bg-[#ffc043] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center px-8 pt-8">
                <img src="/images/logo.svg" alt="Logo" className="h-12" />
                <a
                    href="/login"
                    className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold text-lg shadow-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="10" cy="8" r="4" />
                        <path d="M2 20c0-2.2 4-4 8-4s8 1.8 8 4" />
                    </svg>
                    Login
                </a>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-8 md:px-0 mt-4 md:mt-0">
                {/* Left - Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-center mb-4 md:mb-0">
                    <img
                        src={imageSrc || "/images/burger.png"}
                        alt="Hero"
                        className="w-[320px] md:w-[380px] lg:w-[420px] drop-shadow-xl"
                        style={{ marginLeft: '0' }}
                    />
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-8 mt-2 md:mt-0">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Consegna di cibo a<br />domicilio e molto<br />altro
                    </h1>
                    <p className="text-lg md:text-xl font-bold mb-6 text-black">
                        Generi alimentari, negozi, farmacie, qualsiasi cosa!
                    </p>
                    {/* Address Input */}
                    <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-lg max-w-xl w-full p-2">
                        <div className="flex items-center flex-grow px-2 py-2">
                            <svg className="mr-2 text-gray-500" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2C7 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-3-8-8-8Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-gray-600 text-base">Qual è il tuo indirizzo?</span>
                        </div>
                        <button className="flex items-center gap-2 bg-green-100 text-emerald-700 px-6 py-3 rounded-full font-semibold text-base transition-colors hover:bg-green-200 mt-2 md:mt-0 md:ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M12 2L20 20M12 2L4 20M12 2v20" />
                            </svg>
                            Usa la posizione attuale
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHero;
