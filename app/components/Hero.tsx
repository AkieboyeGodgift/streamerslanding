"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroSectionProps {
  logo: string;
  videos?: string[]; // optional, defaulted to []
}

export default function HeroSection({ logo, videos = [] }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]); // allow nulls

  // Ensure currentIndex is valid when videos length changes
  useEffect(() => {
    if (videos.length === 0) {
      setCurrentIndex(0);
      return;
    }
    if (currentIndex >= videos.length) {
      setCurrentIndex(0);
    }
  }, [videos.length, currentIndex]);

  // Play the current video and pause/reset others; attach 'ended' listener to current only
  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const currentVideo = videoRefs.current[currentIndex];
    if (!currentVideo) return;

    // make sure other videos are paused & reset
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === currentIndex) return;
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        // ignore
      }
    });

    // play the current video (ignore play() promise errors)
    currentVideo.muted = true;
    currentVideo.playsInline = true;
    currentVideo
      .play()
      .catch(() => {
        /* autoplay might be blocked by the browser; that's fine — we don't crash */
      });

    // ended handler -> go to next video
    const onEnded = () => {
      setCurrentIndex((prev) => (videos.length ? (prev + 1) % videos.length : 0));
    };

    currentVideo.addEventListener("ended", onEnded);

    // cleanup
    return () => {
      try {
        currentVideo.removeEventListener("ended", onEnded);
      } catch (e) {
        /* ignore */
      }
    };
  }, [currentIndex, videos]);

  const handleSelect = (index: number) => {
    if (!videos || videos.length === 0) return;
    if (index < 0 || index >= videos.length) return;
    setCurrentIndex(index);
  };

  // If there are no videos, render a safe placeholder
  if (!videos || videos.length === 0) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <Image src={logo} alt="Logo" width={150} height={150} className="rounded-full" />
        <h2 className="mt-6 text-2xl">No videos available</h2>
      </section>
    );
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden no-scrollbar">
      {/* Background Video Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => {
              // assign or clear the ref slot (prevents stale elements)
              if (el) videoRefs.current[index] = el;
              else videoRefs.current[index] = null;
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            muted
            playsInline
            // don't rely on autoPlay boolean only; we programmatically call play()
            // but leaving autoPlay can help in permissive browsers
            autoPlay={index === currentIndex}
          >
            <source src={video} type="video/mp4" />
            {/* fallback */}
          </video>
        ))}

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 text-center flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 px-4">
        <Image
          src={logo}
          alt="Logo"
          width={250}
          height={250}
          className="rounded-full drop-shadow-lg animate-pulse"
        />
        

        
        <div className="flex flex-col items-center md:items-start leading-[1.1] text-center md:text-left">
        <h1 className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-extrabold text-white tracking-tight drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
            Gamer
        </h1>
        <h1 className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-extrabold text-cyan-400 tracking-tight drop-shadow-[0_5px_20px_rgba(0,255,255,0.6)]">
            Stop.
        </h1>
        </div>

      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-30 px-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            aria-label={`Go to video ${index + 1}`}
            className={`relative w-[50px] h-[3px] rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-cyan-400" : "bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
