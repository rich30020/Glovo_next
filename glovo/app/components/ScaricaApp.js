import React from 'react';

const ScaricaApp = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-12 flex flex-col md:flex-row items-center gap-8">
            {/* Colonna sinistra */}
            <div className="text-center max-w-lg md:order-1">
                <div className="mb-6">
                    <img
                        src="/images/mano.svg" // icona con mano e smartphone
                        alt="Scarica l'app"
                        className="h-40 mx-auto"
                    />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Scarica l'app
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Ordina tutto ciò che vuoi e seguilo in tempo reale sull’app Glovo.
                </p>

                <div className="flex justify-center gap-4">
                    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/app-store-button.svg"
                            alt="Download on the App Store"
                            className="h-12"
                        />
                    </a>
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/images/google-play-button.svg"
                            alt="Get it on Google Play"
                            className="h-12"
                        />
                    </a>
                </div>
            </div>

            {/* Colonna destra */}
            <div className="hidden md:block max-w-2xl md:order-2">
                <img
                    src="/images/telefoni.png" // immagine dei telefoni/app Glovo
                    alt="Preview app Glovo"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
};

export default ScaricaApp;
