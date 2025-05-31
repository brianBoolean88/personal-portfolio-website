"use client";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { BackgroundBeams } from "/app/ui/background-beams";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="fixed inset-0 bg-gradient-to-br from-[#23281a] via-[#2d3320] to-[#495544]" />
        <BackgroundBeams />
      </div>
      <NavBar />
      <div className='container mx-auto px-12 py-4'>
        <HeroSection />
      </div>
    </main>
  );
}
