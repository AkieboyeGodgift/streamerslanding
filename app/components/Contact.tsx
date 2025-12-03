"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-24 space-y-12 md:space-y-0">
      
      {/* Left side: Gaming emojis */}
      <div className="hidden md:flex flex-col items-center justify-center space-y-6 text-6xl md:text-7xl mr-12">
        <span>🎮</span>
        <span>🕹️</span>
        <span>🔥</span>
        <span>💥</span>
      </div>

      {/* Right side: Contact form */}
      <div className="flex-1 max-w-2xl w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center md:text-left">
          Contact Me
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-70 text-center md:text-left">
          Whether you're a fan, a brand, or want to collaborate, drop me a message!
        </p>

        <form className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-neutral-900 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-neutral-900 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl bg-neutral-900 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
