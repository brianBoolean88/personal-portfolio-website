"use client";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "/app/hooks/use-outside-click.jsx";
import { InfiniteMovingCards } from "/app/ui/moving-cards.jsx";

const content = [
    {
        title: "Collaborative Editing",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "Real time changes",
        description:
            "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <img
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Version control",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: "Running out of content",
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                Running out of content
            </div>
        ),
    },
];

const cards = [
    {
        description: "Advanced Combat AI",
        title: "LuaU",
        src: "/images/tiktok_ai.png",
        ctaText: "View",
        ctaLink: "https://www.tiktok.com/@togahttps/video/7399158853872520478",
        content: () => {
            return (
                <p>
                    Using a centralized loop through a module, I was able to create an AI combat system that allows for a more realistic and engaging combat experience. The AI can adapt to the player's actions, making each encounter unique and challenging. This system is designed to enhance the gameplay by providing dynamic and responsive AI behavior. The AI can analyze the player's movements and strategies, adjusting its tactics accordingly. This results in a more immersive and unpredictable combat experience, keeping players on their toes and engaged throughout the game.
                </p>
            );
        },
    },
    {
        description: "Advanced Combat System",
        title: "Adobe After Effects",
        src: "/images/combat_system.png",
        ctaText: "View",
        ctaLink: "https://drive.google.com/file/d/1-ky1dN1JSqNPBXM306B4XdPFnr9m8Je5/view?t=1",
        content: () => {
            return (
                <p>
                    I created an advanced combat system using Adobe After Effects, which allows for a more dynamic and engaging combat experience. The system includes various animations and effects that enhance the visual appeal of the combat sequences. By utilizing After Effects, I was able to create smooth transitions and realistic movements, making the combat feel more fluid and responsive. This system is designed to provide players with an immersive and exciting combat experience, keeping them engaged and entertained throughout the game.
                </p>
            );
        },
    },

    {
        description: "Teaching How to Code in Luau",
        title: "YouTube",
        src: "/images/teaching_code.jpg",
        ctaText: "View",
        ctaLink: "https://youtu.be/_Ir0PtPjmKY",
        content: () => {
            return (
                <p>
                    I teach how to code in Luau, the programming language used in Roblox, through my YouTube channel. My videos cover a wide range of topics, from beginner-friendly tutorials to advanced coding techniques. I aim to make learning Luau accessible and enjoyable for everyone, regardless of their prior programming experience. <br /> <br />By breaking down complex concepts into easy-to-understand lessons, I help aspiring developers build their skills and create amazing games on the Roblox platform.
                </p>
            );
        },
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

const projects = () => {

    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <div className="select-none flex flex-col items-center justify-center min-h-screen px-4 py-0">

            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-white md:mb-10 lg:mb-20">
                            Project Agile <br />
                            <span className="text-4xl font-bold mt-1 leading-none block min-h-[150px] lg:min-h-[0px]">
                                <TypeAnimation
                                    sequence={[
                                        '60k Views',
                                        2500,
                                        '200+ Community Members',
                                        2500,
                                        '10k+ Lines of Code',
                                        2500,
                                        '200+ Hours of Work',
                                        2500,
                                        '10+ Team Members',
                                        2500,
                                    ]}
                                    wrapper="span"
                                    speed={20}
                                    className='text-white inline-block text-5xl'
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                    </>
                }
            >

                <Link href={"https://www.youtube.com/@haroharper"}
                    className="block mt-6 py-2 pl-3 pr-4 text-white text-lg font-semibold hover:text-[#E7EFC7] hover:bg-[#697963] rounded transition-colors duration-300 ease-in-out mx-auto" target="_blank" rel="noopener noreferrer">
                    <img
                        src={`/images/yt_vid.jpg`}
                        alt="hero"
                        height={500}
                        width={700}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                    <p className='select-none text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 text-center'>
                        Project Agile is a game set in the dystopian future with much technological advances. The main character, luckily enough, was only a test subject, resulting in a cyborg-human mix. I wonder, what is in stored for you.....?
                    </p>
                </Link>
            </ContainerScroll>


            <div className='text-[#dde9ae] p-8 mt-30 mb-12'>
                <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                    Roblox Studio Projects
                </h1>
                <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
            </div>

            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-[#63725d] sm:rounded-3xl overflow-hidden">
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-white">
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-white">
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-[#AEC8A4] text-white">
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-slate-300 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            <ul className="max-w-5xl mx-auto w-full gap-4 mb-50">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-[#74866c] rounded-xl cursor-pointer mb-10">
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top mx-auto" />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-slate-100 text-center md:text-left">
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-slate-300 text-center md:text-left">
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#8A784E] hover:text-white text-black mt-4 md:mt-0">
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>


            <div className='text-[#dde9ae] p-8 mt-30 mb-12'>
                <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                    Programming Projects
                </h1>
                <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
            </div>

            <div className="mb-50 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                <WobbleCard
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-[#8A784E] min-h-[500px] lg:min-h-[300px]"
                    className=""
                >
                    <div className="max-w-xs">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Food Image AI Predictor
                        </h2>
                        <p className="mt-4 text-left  text-base/6 text-neutral-200">
                            I created a Food Predictor AI algorithm using Google Colab, created using TensorFlow and Keras, featuring deep learning. This is a continuation to my mobile app, ChefLens. I utilized the Fruit Classification dataset of over 22,000 images by EDWARD ZHANG.
                        </p>
                        <div className="flex flex-row">
                            <Image
                                src={`/images/SVG/link.svg`}
                                alt={'LINK'}
                                width={25}
                                height={25}
                                className="mb-1 filter invert brightness-0"
                            />
                            <a
                                href="https://colab.research.google.com/drive/1oefbvuXpcIiTSuoqSOkKT2z94B_c441y?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-[#E7EFC7] hover:text-slate-500 transition-colors duration-300 ease-in-out z-20"
                            >
                                View Project
                            </a>
                        </div>

                    </div>
                    <img
                        src="/images/food_ai.png"
                        width={300}
                        height={300}
                        alt="linear demo image"
                        className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10  rounded-3xl lg:rounded-4xl w-50 h-40 sm:w-80 sm:h-60 lg:w-[500px] lg:h-[350px]"
                    />
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
                    <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        ChefLens
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        ChefLens was a group project led by me. In this app, users are able to find recommended recipes, and search for any recipes that they want to make. Along with that, users are able to take a picture of ingredients, in order for the app to recommend recipes based on those ingredients. The video is merely an introduction to the app, but there is a lot more progress behind the scenes completed.
                    </p>
                    <div className="flex flex-row">
                        <Image
                            src={`/images/SVG/link.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=kgIj3C8w2TI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-[#8A784E] hover:text-slate-300 transition-colors duration-300 ease-in-out z-20"
                        >
                            View Project
                        </a>
                    </div>

                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-800 min-h-[500px] lg:min-h-[600px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            CNUSDSecure
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            CNUSDSecure was a group project made in Flutter using Dart that focused on centralizing my school's information and grade database into one convenient app. In addition to individual information, it also provides district-wide news & gives users an easy way to search for teachers in the district.
                        </p>
                    </div>
                    <img
                        src="/images/cnusd_secure.png"
                        width={200}
                        height={200}
                        alt="linear demo image"
                        className="grayscale filter absolute -right-25 lg:-right-[5%] -bottom-10 rounded-2xl lg:w-100 lg:h-100 sm:w-60 sm:h-60 w-50 h-40 object-cover"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={`/images/SVG/link.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=r1lhc-zQiww"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-blue-300 hover:text-slate-500 transition-colors duration-300 ease-in-out z-20"
                        >
                            View Project
                        </a>
                    </div>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-amber-900 min-h-[500px] lg:min-h-[600px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            NaviGaze
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            Navigaze — a Python-based assistant that lets you control your computer using natural voice commands and your face to control your cursor! This project combines speech recognition, gaze-based cursor control, and automation to create a hands-free user experience.
                        </p>
                    </div>
                    <img
                        src="/images/navigaze.jpg"
                        width={200}
                        height={200}
                        alt="linear demo image"
                        className="grayscale filter absolute -right-25 lg:-right-[5%] -bottom-10 rounded-2xl lg:w-100 lg:h-100 sm:w-60 sm:h-60 w-50 h-40 object-cover"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={`/images/SVG/link.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=8wJqRSfJBn0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-amber-600 hover:text-white-200 transition-colors duration-300 ease-in-out z-20"
                        >
                            View Project
                        </a>
                    </div>
                </WobbleCard>
                <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-600 min-h-[500px] lg:min-h-[600px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            FBLA Connect+
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            FBLA Connect+ was an app that was made on a game engine, which was a unique approach to the FBLA mobile app development competition. This project was awarded 5th in the FBLA State Leadership Conference. This was another group project that I led.
                        </p>
                    </div>
                    <img
                        src="/images/godot.png"
                        width={200}
                        height={200}
                        alt="linear demo image"
                        className="grayscale filter absolute -right-20 lg:-right-[20%] -bottom-10 rounded-2xl lg:w-70 lg:h-70 sm:w-60 sm:h-60 w-50 h-50 object-cover"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={`/images/SVG/link.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=bfBmJOgRenY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-blue-300 hover:text-slate-500 transition-colors duration-300 ease-in-out z-20"
                        >
                            View Project
                        </a>
                    </div>
                </WobbleCard>

                <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-slate-900 min-h-[500px] lg:min-h-[600px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            VGDMR: Video Game Design Marketing Relationships Data Science
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            VGDMR was a data science project that was created in order to help indie developers advertise their video games to the markets, which are highly competitive in modern times. As a video game developer myself, I understand the struggles of releasing applicaitons to an audience.
                        </p>
                    </div>
                    <img
                        src="/images/VGDMR.png"
                        width={200}
                        height={200}
                        alt="linear demo image"
                        className="grayscale filter absolute -right-20 lg:-right-[5%] lg:-bottom-[5%] -bottom-20 rounded-2xl lg:w-50 lg:h-50 sm:w-60 sm:h-60 w-50 h-45 object-cover"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={`/images/SVG/link.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=A7XFvKSs6jQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-slate-300 hover:text-slate-500 transition-colors duration-300 ease-in-out z-20"
                        >
                            View Project
                        </a>
                    </div>
                </WobbleCard>

                <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-indigo-800 min-h-[500px] lg:min-h-[600px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            Leadership Legends
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                            Leadership Legends is a video game made for the FBLA video game design challenge, another project that was led by me. I worked with a pixel art artist. We made it to 3rd in nationals for the FBLA National Leadership Conference. We introduced elements of the gameplay that we enjoyed making. This video game was created on Godot, which was used for FBLA Connect+ as well.
                        </p>
                    </div>
                    <img
                        src="/images/leadership_legends.png"
                        width={200}
                        height={200}
                        alt="linear demo image"
                        className="grayscale filter absolute -right-5 lg:-right-[5%] lg:-bottom-[5%] -bottom-10 rounded-2xl lg:w-50 lg:h-50 sm:w-45 sm:h-45 w-35 h-35 object-cover"
                    />
                    <div className="flex flex-row">
                        <Image
                            src={`/images/SVG/link.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=A7XFvKSs6jQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="select-none px-3 py-2 w-full lg:w-fit rounded-full bg-transparent text-white text-base text-left hover:bg-indigo-400 hover:text-slate-200 transition-colors duration-300 ease-in-out z-20"
                        >
                            View Project
                        </a>
                    </div>
                </WobbleCard>
                <br />
                <br />
                <br />
                <br />
            </div>

            <div className='text-[#dde9ae] p-8 mt-30 mb-12'>
                <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
                    Partnered Organizations
                </h1>
                <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
            </div>
            <section id="organizations">
                <InfiniteMovingCards
                    items={organizations}
                    direction="right"
                    speed="medium"
                    className="mt-0 mb-50 lg:mb-100 w-full h-full"
                >
                </InfiniteMovingCards>
            </section>
        </div >
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};


export default projects;