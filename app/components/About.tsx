"use client";

import React from "react";

export default function StreamerAbout() {
  return (
    <section id="about" className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 space-y-24">

      {/* Title */}
      <h1 className="text-center text-5xl md:text-7xl font-extrabold tracking-wide">
        ABOUT THE STREAM
      </h1>

      {/* Time Section */}
      <div id="live" className="text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide">
          9PM – 12AM
        </h2>
        <p className="text-lg md:text-xl opacity-70 mt-3">
          (Mon - Fri)
        </p>
      </div>

      {/* Part 1 */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">🎮 LIVE SHOWS</h2>
        <p className="text-lg md:text-2xl opacity-80">
          Daily gameplay, cracked skills, challenges, reactions, and pure entertainment.
          The stream is all about energy, chaos, and fun.
        </p>
      </div>

      {/* Part 2 */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">🔥 COMMUNITY</h2>
        <p className="text-lg md:text-2xl opacity-80">
          A place for gamers, chill vibes, friendly banter, and competitive spirit.
          Everyone is welcome — no stress, just vibes.
        </p>
      </div>

      {/* Part 3 - About Me */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">👤 ABOUT ME</h2>
        <p className="text-lg md:text-2xl opacity-80">
          I’m a dedicated streamer who loves gaming, creating moments, and connecting
          with people all around the world. I play hard, laugh loud, and keep it real.
        </p>
      </div>
    </section>
  );
}
