"use client";
import React from "react";
import NavBar from "/app/components/NavBar.jsx";
import { NightSkyBackground } from "/app/ui/night-sky-background";
import { Footer } from '/app/components/Footer.jsx';
import Projects from '/app/components/Projects.jsx';
import { motion } from "framer-motion";

const ProjectsPage = () => {
    return (
        <main className="flex min-h-screen flex-col relative">
            <div className="min-h-screen fixed inset-0 -z-10 h-full w-full">
                <NightSkyBackground className="absolute inset-0 h-full w-full" />
            </div>
            <NavBar />
            <div className='container mx-auto px-12 py-4 overflow-x-hidden'>
                <motion.div
                    className='select-none'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Projects />
                </motion.div>
            </div>
            <Footer />
        </main>
    );
};

export default ProjectsPage;