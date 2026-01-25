"use client";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { NightSkyBackground } from "/app/ui/night-sky-background";
import { Footer } from '/app/components/Footer.jsx';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Remove pointer-events-none and make it interactive */}
      <div className="min-h-screen fixed inset-0 -z-10 h-full w-full">
        <NightSkyBackground className="absolute inset-0 h-full w-full" />
      </div>
      
      {/* Make sure content is above the background */}
      <div className="relative z-10">
        <NavBar />
        <div className='container mx-auto px-12 py-4 overflow-x-hidden'>
          <motion.div
              className='select-none'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroSection />
          </motion.div>
        </div>
        <Footer />
      </div>
    </main>
  );
}