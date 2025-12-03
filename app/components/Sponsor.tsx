"use client";

import React from "react";

export default function SponsorsSection() {
  const sponsors = [
    { name: "ASUS ROG", logo: "/logo/rog.png" },
    { name: "SteelSeries", logo: "/logo/ss.png" },
    { name: "Cooler Master", logo: "/logo/coolermaster.png" },
    { name: "Lenovo Legion", logo: "/logo/legion.png" },
  ];

  return (
    <section id="sponsors" className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24 space-y-20">
      
      {/* Title */}
      <h1 className="text-center text-5xl md:text-7xl font-extrabold tracking-wide">
        SPONSORS
      </h1>

      {/* Sub Intro */}
      <p className="text-center text-xl md:text-2xl opacity-70 max-w-2xl">
        Powered by the amazing partners that support the stream.
      </p>

      {/* Sponsor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-6 p-6 rounded-3xl bg-neutral-900"
          >
            {/* Logo */}
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              className="w-16 h-16 object-contain"
            />

            {/* Sponsor Name */}
            <div className="text-3xl md:text-4xl font-bold">
              {sponsor.name}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Line */}
      <p className="opacity-60 text-lg mt-10">
        Interested in becoming a sponsor? Contact me.
      </p>
    </section>
  );
}
