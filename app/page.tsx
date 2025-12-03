import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import StreamerAbout from "./components/About";
import SponsorsSection from "./components/Sponsor";
import PlatformsSection from "./components/Streams";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {

  const videos = [
    "/video/hero-1.mp4",
    "/video/hero-2.mp4",
    "/video/hero-3.mp4",
    "/video/hero-4.mp4",
  ];

  return (
    <>
      <Navbar logo="/loader.png" title="Gamers Stop." />
      <HeroSection logo="/loader.png" videos={videos} />
      <StreamerAbout />
      <SponsorsSection />
      <PlatformsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
