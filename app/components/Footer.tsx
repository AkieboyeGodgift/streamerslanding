"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 flex flex-col md:flex-row items-center justify-between border-t border-neutral-800">
      
      {/* Left: Brand / copyright */}
      <div className="text-center md:text-left mb-4 md:mb-0">
        <span className="font-bold text-lg md:text-xl">GamerStop.</span> © {new Date().getFullYear()}
      </div>

      {/* Right: Social links / playful emojis */}
      <div className="flex space-x-6 text-2xl justify-center md:justify-end">
        <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">🎮</a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">💬</a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">🎵</a>
        <a href="https://kick.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">🔥</a>
      </div>
    </footer>
  );
}
