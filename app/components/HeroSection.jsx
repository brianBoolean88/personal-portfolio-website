"use client"
import React from 'react'
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
import { InfiniteMovingCards } from "/app/ui/moving-cards.jsx";
import { motion } from "framer-motion";

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

const organizations = [
    {
        quote:
            "I lead the CS team in the back-end department, from creating Doctor Portals (patient data) to filming and editing video documentation. We are recognized by Bourns Engineering and receive grants from them.",
        name: "VMM",
        title: "Virtual Medical Missions",
        href: "https://www.vmmhealthcare.org/",
        icon: "VMM.jpg"
    },
    {
        quote:
            "I led a partnership for FBLA with Nektar Juice Bar and held workshops wtih a committee of 32 members, and coordinated with guest speakers from Nektar Juice Bar to speak to the youth about entrepreneurship.",
        name: "FBLA",
        title: "Future Business Leaders of America",
        href: "https://www.fbla.org/",
        icon: "fbla.png"
    },
    {
        quote:
            "I led a team of 10+ developers to create a game called Project Agile, which has over 60,000 views on YouTube. I also led the team in creating a game called Project Agile Studios, which is a game development studio.",
        name: "P.A.S.",
        title: "Project Agile Studios",
        href: "https://discord.com/invite/UVjqd99xRe",
        icon: "project_agile.png"
    },
];

const HeroSection = () => {
    return (
        <div className='select-none'>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <section id="hero">
                    <div className='mt-30 lg:mb-50 grid grid-cols-1 lg:grid-cols-12 z-in'>
                        {/* Left side */}
                        <div className='mb-20 sm:mb-25 col-span-7 place-self-center text-center lg:text-left'>
                            <h1 className="select-none text-white mb-4 text-4xl lg:text-5xl font-extrabold">
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                                    Hello, I'm
                                </span>
                                <br></br>
                                <TypeAnimation
                                    sequence={[
                                        'Brian',
                                        2500,
                                        'Game Developer',
                                        2500,
                                        'Simulation Engineer',
                                        2500,
                                        'Full Stack Developer',
                                        2500,
                                        'Web & Mobile Developer',
                                        2500,
                                        'Backend Engineer',
                                        2500,
                                        'AI Engineer',
                                        2500,
                                        'Graphics Designer'
                                    ]}
                                    wrapper="span"
                                    speed={20}
                                    className='text-white inline-block text-5xl'
                                    repeat={Infinity}
                                />
                            </h1>
                            <p className='select-none text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 pr-5 mr-2'>
                                Hello, I’m Brian (“Harper” online), a developer skilled in games, simulations, full stack, web/mobile apps, backend, AI, and graphics. I build engaging, innovative digital solutions.
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
                                    href="/files/resume.pdf"
                                    download
                                    className='select-none px-6 py-3 w-full lg:w-fit rounded-full mr-4 bg-transparent hover:bg-[#AEC8A4] text-white border border-white mt-4 text-xl inline-block text-center'
                                    aria-label='Download my resume.'
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>

                            <CardContainer className="inter-var">
                                <CardBody className="">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        <div className='rounded-full bg-gradient-to-br from-[#AEC8A4] via-[#bbc8a4] to-[#3B3B1A] w-[325px] h-[325px] sm:w-[375px] sm:h-[375px] lg:w-[400px] lg:h-[400px] relative'>
                                            <Image
                                                src="/images/hero_img.png"
                                                alt="Hero Image"
                                                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:w-[300px] lg:h-[300px]'
                                                width={275}
                                                height={275}
                                            />
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </CardContainer>

                        </div>
                    </div>
                </section>
            </motion.div>

            <section id="about">

                <div className='text-[#dde9ae] p-8 mt-12 mb-12'>
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
                            rectangleClassName="bg-[#8A784E] leading-loose"
                            pointerClassName="text-[#E7EFC7] h-3 w-3"
                            containerClassName="inline-block mx-1"
                        >
                            <span className="relative z-10"> UC Berkeley EECS student </span>
                        </PointerHighlight>
                        passionate about bridging hardware and software. I’ve led teams in robotics, computer science, and cybersecurity competitions, as well as real-world projects that have reached over 60,000 impressions on YouTube. I thrive on collaboration and clear communication, working with others to achieve ambitious goals. Outside of tech, I value balance—prioritizing sleep, fitness, time management, and productivity.
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        <Testimonial
                            name="Linda, Ho"
                            position="AP Language & Composition Teacher, eSTEM Academy"
                            image="/images/test_1.jpg"
                            quote="I have observed from him the utmost care and attention to answering not only complex math and philosophical, but also simple questions. He explores nuanced texts thoroughly and aims to dedicate thought and consideration to develop his responses whether written or verbal."
                        />
                        <Testimonial
                            name="Scott, Usher"
                            position="AP CSA Teacher, eSTEM Academy"
                            image="/images/test_2.jpg"
                            quote="In the classroom, Brian is attentive, on task, well-organized, and one step ahead. Brian is an effective communicator in collaborative activities, responsive to in-class discussions, and will ask questions to clarify instructions or out of curiosity."
                        />
                        <Testimonial
                            name="Jauregui-Castañon, Hilda"
                            position="eSTEM Academy Counselor"
                            image="/images/test_3.jpg"
                            quote="Brian is an exceptional communicator. He has effectively collaborated with peers on numerous team-based projects, demonstrating his ability to lead and inspire those around him. For instance, Brian played a pivotal role in leading a team of developers on the game Project Agile, where he showcased his skills in blueprinting and coding."
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
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
                    <p className='text-[#ADB7BE] text-center text-base sm:text-lg lg:text-xl mt-7'>
                        The cards below are draggable!
                    </p>
                </div>
                <DraggableCardContainer className="relative flex min-h-screen w-full max-w-screen-xl mx-auto items-center justify-center">
                    <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-extralight md:text-4xl text-white italic">
                        "The only way to do great work is to love what you do." - Steve Jobs
                    </p>
                    {items.map((item) => (
                        <DraggableCardBody key={item.title} className={item.className}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                            />
                            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                                {item.title}
                            </h3>
                        </DraggableCardBody>
                    ))}
                </DraggableCardContainer>
                <div className='text-[#AEC8A4] p-8 mt-12 mb-12'>
                    <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                            Previous {" "}
                        </span>
                        Expereinces
                    </h1>
                    <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
                    <div className="grid grid-cols-3 gap-8 mt-8">
                        {[
                            { name: "Bootstrap HTML", icon: "bootstrap.svg" },
                            { name: "Tailwind CSS", icon: "tailwindcss.svg" },
                            { name: "PostgreSQL", icon: "postgresql.svg" },
                            { name: "Java", icon: "java.svg" },
                            { name: "C++", icon: "cplusplus.svg" },
                            { name: "Python", icon: "python.svg" },
                            { name: "Luau", icon: "lua.svg" },
                            { name: "JSX", icon: "react.svg" },
                            { name: "JS", icon: "javascript.svg" },
                        ].map(skill => (
                            <div key={skill.name} className="bg-[#23281a] rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform">
                                <Image
                                    src={`/images/SVG/${skill.icon}`}
                                    alt={skill.name}
                                    width={50}
                                    height={50}
                                    className="mb-4 filter invert brightness-0"
                                />
                                <span className="text-white font-semibold text-lg">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <section id="organizations">
                    <div className='text-[#dde9ae] p-8 mt-30 mb-12'>
                        <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E7EFC7] to-[#AEC8A4]'>
                                Partnered {" "}
                            </span>
                            Organizations
                        </h1>
                        <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
                    </div>

                    <InfiniteMovingCards
                        items={organizations}
                        direction="right"
                        speed="medium"
                        className="mt-0 mb-50 lg:mb-100 w-full h-full"
                    >
                    </InfiniteMovingCards>
                </section>
            </motion.div>

        </div>
    )
}

export default HeroSection