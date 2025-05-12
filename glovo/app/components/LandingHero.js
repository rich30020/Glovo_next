import React from 'react';

const LandingHero = ({ title, subtitle, imageSrc }) => {
    return (
        <div className="flex flex-col h-[60vh] bg-yellow-400 text-black overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4">
                <img src="/images/logo.svg" alt="Logo" className="h-10" />
                <a
                    href="/login"
                    className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M6 20c0-2.2 3-4 6-4s6 1.8 6 4" />
                    </svg>
                    Login
                </a>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-20">
                {/* Left - Image */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={imageSrc} alt="Hero" className="w-full max-w-md mx-auto" />
                </div>

                {/* Right - Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl font-semibold">
                        {subtitle}
                    </p>
                    {/* Address Input */}
                    <div className="flex flex-col sm:flex-row bg-white rounded-full p-2 shadow-md max-w-xl">
                        <div className="flex items-center px-4 py-2 flex-grow">
                            <svg className="mr-2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2C7 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-3-8-8-8Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-gray-500">Qual è il tuo indirizzo?</span>
                        </div>
                        <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold flex items-center gap-2 mt-2 sm:mt-0 sm:ml-2">
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
