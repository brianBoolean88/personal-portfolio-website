"use client";
import React from "react";
import NavBar from "/app/components/NavBar.jsx";
import { BackgroundBeams } from "/app/ui/background-beams";
import { Footer } from '/app/components/Footer.jsx';
import Contact from '/app/components/Contact.jsx';

const ContactPage = () => {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="fixed inset-0 bg-gradient-to-br from-[#23281a] via-[#2d3320] to-[#495544]" />
                <BackgroundBeams />
            </div>
            <NavBar />
            <div className='container mx-auto px-12 py-4'>
                <Contact />
            </div>
            <Footer />
        </main>
    );
};

export default ContactPage;