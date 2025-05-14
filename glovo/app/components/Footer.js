"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white pt-16 pb-8 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Logo & Uniamo le forze */}
          <div className="flex flex-col gap-8 md:w-1/4">
            <Image
              src="/images/logo.svg"
              alt="Glovo"
              width={120}
              height={40}
              className="mb-2"
              priority
            />
            <div>
              <h3 className="font-bold text-xl mb-2">Uniamo le forze</h3>
              <ul className="space-y-2 text-base font-normal">
                <li><a href="#" className="hover:underline">Lavora con noi</a></li>
                <li><a href="#" className="hover:underline">Glovo per i Partner</a></li>
                <li><a href="#" className="hover:underline">Corrieri</a></li>
                <li><a href="#" className="hover:underline">Glovo Business</a></li>
              </ul>
            </div>
          </div>
          {/* Link di interesse */}
          <div className="flex flex-col gap-8 md:w-1/4">
            <div>
              <h3 className="font-bold text-xl mb-2">Link di interesse</h3>
              <ul className="space-y-2 text-base font-normal">
                <li><a href="#" className="hover:underline">Chi siamo</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Glovo Prime</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contattaci</a></li>
                <li><a href="#" className="hover:underline">Sicurezza</a></li>
              </ul>
            </div>
          </div>
          {/* Segui */}
          <div className="flex flex-col gap-8 md:w-1/4">
            <div>
              <h3 className="font-bold text-xl mb-2">Seguici</h3>
              <ul className="space-y-2 text-base font-normal">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">TikTok</a></li>
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="App Store">
                <Image
                  src="/images/app-store-button.svg"
                  alt="App Store"
                  width={140}
                  height={44}
                  className="rounded"
                />
              </a>
              <a href="#" aria-label="Google Play">
                <Image
                  src="/images/google-play-button.svg"
                  alt="Google Play"
                  width={140}
                  height={44}
                  className="rounded"
                />
              </a>
            </div>
          </div>
          {/* Policy links */}
          <div className="flex flex-col gap-2 md:w-1/4 mt-4 md:mt-0">
            <a href="#" className="hover:underline text-sm">CONFIGURA I COOKIE</a>
            <a href="#" className="hover:underline text-sm">TERMINI E CONDIZIONI</a>
            <a href="#" className="hover:underline text-sm">POLITICA SULLA PRIVACY</a>
            <a href="#" className="hover:underline text-sm">POLITICA SUI COOKIE</a>
            <a href="#" className="hover:underline text-sm">CONFORMITÀ</a>
          </div>
        </div>
        {/* Language selector */}
        <div className="mt-12 flex justify-start">
          <div className="relative w-64">
            <select className="w-full bg-[#232323] text-white py-3 px-4 rounded-md appearance-none focus:outline-none">
              <option>Italiano</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M6 8l4 4 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
