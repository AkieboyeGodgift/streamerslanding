"use client";

import React from "react";

export default function PlatformsSection() {
  const platforms = [
    {
      name: "Twitch",
      username: "@ GamerStop.",
      color: "#9146FF",
      logo: "/logo/twitch.png", 
    },
    {
      name: "Kick",
      username: "@ GamerStop.",
      color: "#000000",
      logo: "/logo/kick.png", 
    },
    {
      name: "Discord",
      username: "@ GamerStop.",
      color: "#5865F2",
      logo: "/logo/discord.png", 
    },
  ];

  return (
    <section id="streams" className="min-h-screen w-full flex flex-col bg-black">
      <div className="w-full flex flex-col md:flex-row">
        {platforms.map((platform, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-center justify-center text-white min-h-[35vh] md:min-h-[70vh] p-12 cursor-pointer hover:scale-105 transform transition-transform duration-300"
            style={{ backgroundColor: platform.color }}
          >
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-6"
            />
            <span className="text-2xl md:text-3xl font-bold text-center">{platform.username}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
