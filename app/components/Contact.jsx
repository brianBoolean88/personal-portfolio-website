"use client";

import React from "react";
import { AnimatedTestimonials } from "/app/ui/animated-testimonials";

const contactMethods = [
    {
        quote:
            "This is my LinkedIn profile. Feel free to connect with me for professional networking and opportunities.",
        name: "LinkedIn",
        src: "/images/SVG/linkedin.svg",
        href: "https://www.linkedin.com/in/brian-wang-professional/",
    },
    {
        quote:
            "This is my Instagram profile. Follow me for updates on my personal projects and interests.",
        name: "Instagram",
        src: "/images/SVG/instagram.svg",
        href: "https://www.instagram.com/brianwanggg/",
    },
    {
        quote:
            "This is my newer GitHub account. I lost access to my old one, so please view this one for new updates and contributions.",
        name: "Github (New)",
        src: "/images/SVG/github1.svg",
        href: "https://github.com/brianBoolean88",
    },
    {
        quote:
            "This is my old GitHub account. I lost access to it, but it still contains valuable contributions and projects.",
        name: "Github (Old)",
        src: "/images/SVG/github2.svg",
        href: "https://github.com/88BrianW",
    },
];

const Contact = () => {
    return (
        <div className="select-none mt-20 mb-20 w-full h-full">
            <AnimatedTestimonials contact={contactMethods} />
        </div>
    );
}

export default Contact;
