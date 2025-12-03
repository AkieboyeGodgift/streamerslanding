"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface LoaderProps {
  loaderImg: string; // your custom loader image
  profileImg: string; // bottom-right circle image
}

export default function Loader({ loaderImg, profileImg }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Simulate loading progress and fade out after complete
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 100 ? 100 : next;
      });
    }, 100);

    // Fake loading complete after ~2.2s
    const completeTimer = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
    }, 2200);

    // Clean up timers
    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, []);


  return (
    <>
      {/* Loader overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, #0a0a0a 40%, #000 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          opacity: fadeOut ? 0 : 1,
          pointerEvents: fadeOut ? "none" : "auto",
          transition: "opacity 1s ease",
        }}
      >
        <Image
          src={loaderImg}
          alt="Loading..."
          width={100}
          height={100}
          style={{
            objectFit: "contain",
            filter: "drop-shadow(0 0 15px #00ffff)",
            marginBottom: "1rem",
          }}
        />

        <div
          style={{
            width: "200px",
            height: "6px",
            borderRadius: "10px",
            background: "#111",
            overflow: "hidden",
            boxShadow: "0 0 10px #00ffff",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background:
                "linear-gradient(90deg,#00ffff,#ff00ff,#00ffff)",
              transition: "width 0.2s linear",
              boxShadow: "0 0 15px #00ffff",
            }}
          />
        </div>
      </div>

      {/* Bottom-right circular profile */}
      {fadeOut && (
        <div
          onClick={() => {
            const element = document.getElementById("streams");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "3px solid #00ffff",
            overflow: "hidden",
            transition: "0.3s",
            cursor: "pointer",
            zIndex: 10000,
            boxShadow: "0 0 15px #00ffff",
          }}
        >
          <Image
            src={profileImg}
            alt="Profile"
            width={60}
            height={60}
            className="pt-1"
          />
        </div>

      )}
    </>
  );
}
