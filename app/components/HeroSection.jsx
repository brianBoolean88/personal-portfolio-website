"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { CardBody, CardContainer, CardItem } from "/app/ui/3d-card";
import ThreeDPin from './ThreeDPin'
import Testimonial from './Testimonial.jsx';
import {
    DraggableCardBody,
    DraggableCardContainer,
} from "/app/ui/draggable-card.jsx";
import { PointerHighlight } from "/app/ui/pointer-highlight.jsx";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import matchaPour from "/public/files/coffee.json";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        title: "USACO Silver",
        image: "/images/achievements/usaco_silver.png",
        className: "absolute top-8 left-[8%] rotate-[-8deg]",
    },
    {
        title: "IgniteCS 2nd Place (2022) + Honorable Mention (2023)",
        image: "/images/achievements/ignitecs_logo.png",
        className: "absolute top-24 left-[40%] rotate-[6deg]",
    },
    {
        title: "Seeking Science Magazine Initiative President",
        image: "/images/achievements/seeking_science.png",
        className: "absolute top-2 left-[50x%] rotate-[12deg]",
    },
    {
        title: "CyberPatriot XVI 2nd Place Silver Award",
        image: "/images/achievements/cyberpatriot_logo.png",
        className: "absolute top-40 left-[15%] rotate-[-10deg]",
    },
    {
        title: "Google Cybersecurity Certificate",
        image: "/images/achievements/google_cybersec.png",
        className: "absolute top-24 left-[50%] rotate-[-4deg]",
    },
    {
        title: "Google Automation with Python Certificate",
        image: "/images/achievements/google_automation.png",
        className: "absolute top-10 left-[45%] rotate-[7deg]",
    },
    {
        title: "FBLA 3rd Place National Award for Game Design",
        image: "/images/achievements/fbla_third.png",
        className: "absolute top-23 left-[25%] rotate-[13deg]",
    },
    {
        title: "FBLA 7th State Award for Cybersecurity",
        image: "/images/achievements/fbla_cyber.jpg",
        className: "absolute top-20 left-[50%] rotate-[-6deg]",
    },
    {
        title: "FBLA 5th State Award for Mobile App Development",
        image: "/images/achievements/fbla_fifth.png",
        className: "absolute top-34 left-[10%] rotate-[5deg]",
    },
];

const HeroSection = () => {
    const lottieRef = useRef(null);
    const lottieInstance = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            lottieInstance.current = lottie.loadAnimation({
                container: lottieRef.current,
                renderer: "svg",
                loop: false,
                autoplay: false,
                animationData: matchaPour,
            });

            lottieInstance.current.addEventListener("DOMLoaded", () => {
                const totalFrames = lottieInstance.current.getDuration(true);

                ScrollTrigger.create({
                    trigger: lottieRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: self => {
                        const progress = self.progress;
                        lottieInstance.current.goToAndStop(progress * totalFrames, true);
                    }
                });
            });
        }, lottieRef);

        return () => {
            lottieInstance.current?.destroy();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            ctx.revert();
        };
    }, []);

    return (
        <div className='select-none'>
            <section id="hero">
                <div className='mt-40 lg:mt-50 lg:mb-0 grid grid-cols-1 lg:grid-cols-12 z-in'>
                    {/* Left side */}
                    <div className='mb-10 sm:mb-25 col-span-7 place-self-center text-center lg:text-left'>
                        <h1 className="select-none text-white mb-4 text-4xl lg:text-5xl font-extrabold">
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4] inline'>
                                Hello, I'm
                            </span>
                            <br></br>
                            <span
                                className="block min-h-[150px] lg:min-h-[0px]"
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Brian',
                                        2500,
                                        'a Game Developer',
                                        2500,
                                        'a Simulation Engineer',
                                        2500,
                                        'a Full Stack Developer',
                                        2500,

                                        2500,
                                        'a Backend Engineer',
                                        2500,
                                        'a AI Engineer',
                                        2500,
                                        'a Graphics Designer',
                                        2500,
                                    ]}
                                    wrapper="span"
                                    speed={20}
                                    className='text-white text-5xl'
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                        <p className='select-none text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 pr-5 mr-2'>
                            Hello, I’m Brian (“Harper” online), a developer skilled in games, simulations, full stack, web/mobile apps, backend, AI, and graphics. I build engaging, innovative digital solutions.
                        </p>
                        <p className='select-none text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 pr-5 mr-2'>
                            I have 6+ years of experience in programming both front-end and back-end, 4+ years of experience in game development, and 2+ years of experience in utilizing API/Library/Framework services such as AI, AWS, Mediapipe, NextJS, and more.
                        </p>
                        <div>
                            <a
                                href="/contact"
                                className='select-none px-6 py-3 w-full lg:w-fit rounded-full mr-4 bg-gradient-to-br from-[#E7EFC7] via-[#AEC8A4] to-[#8A784E] hover:bg-transparent text-white text-xl inline-block text-center'
                                aria-label='Contact me via email'
                            >
                                Hire Me
                            </a>
                            <a
                                href="/files/Brian Wang's Resume Revised V3.pdf"
                                download
                                className='select-none px-6 py-3 w-full lg:w-fit rounded-full mr-4 bg-transparent hover:bg-[#AEC8A4] text-white border border-white mt-4 text-xl inline-block text-center'
                                aria-label='Download my resume.'
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className='col-span-5 place-self-center mt-4 md:mr-10 lg:mt-0 ml-15'>

                        <CardContainer className="inter-var">
                            <CardBody className="">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600"
                                >
                                    <div className='rounded-full bg-gradient-to-br from-[#AEC8A4] via-[#bbc8a4] to-[#3B3B1A] w-[325px] h-[325px] sm:w-[375px] sm:h-[375px] lg:w-[400px] lg:h-[400px] relative'>
                                        <Image
                                            src="/images/hero_imgv3.png"
                                            alt="Hero Image"
                                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[280px] lg:h-[280px] rounded-2xl object-cover'
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </CardItem>
                            </CardBody>
                        </CardContainer>

                    </div>
                </div>

                <div ref={lottieRef} style={{ width: 300, height: 300, margin: "0 auto" }} />

            </section>

            <section id="about">

                <div className='text-[#dde9ae] p-8 mt-0 mb-12'>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                            About {" "}
                        </span>
                        Me
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
                    <p className='text-[#ADB7BE] text-center text-base sm:text-lg lg:text-xl mt-7'>
                        I’m a
                        <PointerHighlight
                            rectangleClassName="bg-[#81947a] leading-loose"
                            pointerClassName="text-white h-3 w-3"
                            containerClassName="inline-block mx-1"
                        >
                            <span className="relative z-10"> UC Berkeley EECS student </span>
                        </PointerHighlight>
                        passionate about bridging hardware and software. I’ve led teams in robotics, computer science, and cybersecurity competitions, as well as real-world projects that have reached over 60,000 impressions on YouTube. I thrive on collaboration and clear communication, working with others to achieve ambitious goals. Outside of tech, I value balance-prioritizing sleep, fitness, time management, and productivity.
                    </p>
                </div>

                <div className='text-[#AEC8A4] p-8 mt-8 mb-12'>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                            Professional {" "}
                        </span>
                        Experience
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
                    <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 gap-x-40 lg:gap-x-60 justify-center items-center'>
                        <ThreeDPin
                            title={"3D Game Development Teacher Intern"}
                            description={"Taught 3D game development to high school students at Coding Stem Academy, covering Unity, C#, and game design principles. Created engaging lesson plans and hands-on projects."}
                            img={"/images/coding_stem_academy.jpg"}
                            href={"http://codingstemacademy.com/"}
                            className="mx-auto"
                        />
                        <ThreeDPin
                            title={"VMM CS Lead Intern"}
                            description={"Led a team of CS interns at VMM, developing web-based applications such as the EMR System, Patient Portal, and Telemedicine System. Utilized HTML, CSS, JS, Quart/Flask Python, SQL."}
                            img={"/images/VMM.jpg"}
                            href={"https://www.vmmhealthcare.org/"}
                        />
                        <ThreeDPin
                            title={"Encryption Algorithm Researcher"}
                            description={"Researched and implemented encryption algorithms for secure data transmission. Developed a custom encryption protocol using Python Flask, enhancing data security for applications."}
                            img={"/images/ficrypt_logo.png"}
                            href={"https://www.youtube.com/watch?v=issbem_ClSA&t"}
                        />
                    </div>
                </div>
                <div className='text-[#AEC8A4] p-8 mt-8 mb-12'>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                            Test
                        </span>
                        imonials
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
                    <div className="grid grid-cols-1 gap-10 mt-12">
                        <Testimonial
                            name="Scott, Usher"
                            position="AP CSA Teacher, eSTEM Academy"
                            image="/images/test_2.jpg"
                            quote="Brian is attentive, on task, well-organized, and one step ahead. He is an effective communicator in collaborative activities. He learned Java and JavaScript in the classroom, but self-taught other programming languages and explored various Integrated Development Environment IDEs that he used to develop projects for academic competitive events."
                        />
                    </div>
                </div>
                <div className='text-[#AEC8A4] p-8 mt-8 mb-12'>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                            Notable {" "}
                        </span>
                        Achievements
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40 z-0"></div>
                    <p className='text-[#ADB7BE] text-center text-base sm:text-lg lg:text-xl mt-7'>
                        The cards below are draggable!
                    </p>
                </div>
                <DraggableCardContainer className="relative flex min-h-screen w-full max-w-screen-xl mx-auto items-center justify-center z-30">
                    <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-extralight md:text-4xl text-white italic">
                        "The only way to do great work is to love what you do." - Steve Jobs
                    </p>
                    {items.map((item) => (
                        <DraggableCardBody key={item.title} className={item.className}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={300}
                                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                            />
                            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-300">
                                {item.title}
                            </h3>
                        </DraggableCardBody>
                    ))}
                </DraggableCardContainer>
                <div className='text-[#AEC8A4] p-8 mt-12 mb-12 z-80'>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center z-20">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4] z-20'>
                            Previous {" "}
                        </span>
                        Experiences
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40 z-1"></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                        {[
                            { name: "Bootstrap HTML", icon: "bootstrap.svg", href: "https://getbootstrap.com/" },
                            { name: "Tailwind CSS", icon: "tailwindcss.svg", href: "https://tailwindcss.com/" },
                            { name: "PostgreSQL", icon: "postgresql.svg", href: "https://www.postgresql.org/" },
                            { name: "Java", icon: "java.svg", href: "https://www.java.com/en/" },
                            { name: "C++", icon: "cplusplus.svg", href: "https://cplusplus.com/" },
                            { name: "Python", icon: "python.svg", href: "https://www.python.org/" },
                            { name: "LuaU", icon: "lua.svg", href: "https://luau.org/" },
                            { name: "JSX", icon: "react.svg", href: "https://react.dev/" },
                            { name: "Dart", icon: "dart.svg", href: "https://flutter.dev/", className: " col-span-2 md:col-span-1" },
                        ].map(skill => (
                            <a
                                key={skill.name}
                                className={"bg-[#44624a] rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform z-80" + (skill.className || "")}
                                href={skill.href}
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <Image
                                    src={`/images/SVG/${skill.icon}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    className="mb-4 filter invert brightness-0 w-12 h-12 lg:w-16 lg:h-16 object-cover"
                                />
                                <span className="text-white font-semibold text-lg break-words text-center">{skill.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection