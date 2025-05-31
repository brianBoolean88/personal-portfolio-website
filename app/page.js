"use client";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { BackgroundBeams } from "/app/ui/background-beams";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#3B3B1A]">
      <div className="fixed inset-0 z-1 pointer-events-none">
        <BackgroundBeams />
      </div>
      <NavBar className="z-3" />
      <div className='container mx-auto px-12 py-4 z-2'>
        <HeroSection />
      </div>
    </main>
  );
}
