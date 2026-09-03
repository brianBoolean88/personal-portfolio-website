"use client"
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
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
import matchaPour from "/public/files/rocket.json";
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
        <div className='mt-30 mb-30 lg:mt-40 lg:mb-30 grid grid-cols-1 lg:grid-cols-12 z-in'>
          {/* Left side */}
          <div className='mt-30 mb-10 sm:mb-25 col-span-7 place-self-center text-left '>
            <h1 className="select-none text-white mb-4 text-4xl lg:text-5xl font-extrabold">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] inline'>
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


            <div className="flex justify-center mt-8">
              <a
                href="#about"
                aria-label="Scroll down"
                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-125"
              >
                {/* Arrow */}
                <svg
                  className="w-8 h-8 text-white animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>


          </div>

          {/* Right side */}
          <div className='col-span-5 place-self-center md:mr-10 lg:mt-0 ml-15'>

            <CardContainer className="inter-var">
              <CardBody>
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600">
                  <div className="relative rounded-full p-[2px] 
  w-[325px] h-[325px] 
  sm:w-[375px] sm:h-[375px] 
  lg:w-[400px] lg:h-[400px]
  bg-gradient-to-br from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] shrink-0"
                  >
                    <div className="relative overflow-hidden rounded-full w-full h-full bg-[#1a1a1a] aspect-square">
                      <Image
                        src="/images/hero_landing.jpg"
                        alt="Brian Wang"
                        fill
                        priority
                        sizes="(max-width: 640px) 325px, (max-width: 1024px) 375px, 400px"
                        className="object-cover object-[50%_16%]"
                      />
                    </div>
                  </div>

                </CardItem>
              </CardBody>
            </CardContainer>


          </div>
        </div>

        <div ref={lottieRef} style={{ width: 300, height: 300, margin: "0 auto" }} className="mt-5" />

      </section>

      <section id="about">

        <div className='text-[#dde9ae] p-8 mt-0 mb-12'>
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff]'>
              About {" "}
            </span>
            Me
          </h1>
          <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
          <p className='text-[#ffffff] text-center text-base sm:text-lg lg:text-xl mt-7'>
            I’m a
            <PointerHighlight
              rectangleClassName="bg-[#4A5568] leading-loose"
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
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff]'>
              Professional {" "}
            </span>
            Experience
          </h1>
          <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 justify-items-center max-w-4xl mx-auto'>
            <ThreeDPin
              title={"BlueRobins Mobile & AI Developer"}
              description={"Shipped the company’s end-to-end mobile app from concept to production. Built an AI retrieval bot with PostgreSQL pgvector and RPC cosine search, and tightened security with AWS secret rotation, Supabase RLS, and isolated CRON/JWT auth."}
              href={"https://www.bluerobins.com/"}
              monogram={"BR"}
            />
            <ThreeDPin
              title={"MobileCybench Research Intern"}
              description={"Researched and implemented app source building, metadata debugging, APK uninstallation in Git Workflow CI, Creating Git Commit Onerror & Test files, synthetic vulnerabilities. There is no link unfortunately, as it is a private repo."}
              img={"/images/mobilecybench.png"}
              href={""}
            />
            <ThreeDPin
              title={"VMM CS Lead Intern"}
              description={"Led a team of CS interns at VMM, developing web-based applications such as the EMR System, Patient Portal, and Telemedicine System. Utilized HTML, CSS, JS, Quart/Flask Python, SQL."}
              img={"/images/VMM.jpg"}
              href={"https://www.vmmhealthcare.org/"}
            />
            <ThreeDPin
              title={"3D Engineering Teacher Intern"}
              description={"Taught 3D Design (Robotics, Unity) to high school students at Coding Stem Academy over summer, covering Unity, C#, and game design principles. Created engaging lesson plans and hands-on projects."}
              img={"/images/coding_stem_academy.jpg"}
              href={"http://codingstemacademy.com/"}
            />
          </div>
        </div>
        
        <section id="projects">
        <div className='text-[#AEC8A4] p-8 mt-8 mb-12'>
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff]'>
              Projects
            </span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <Link
              href="/projects"
              className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm transition-all duration-500 hover:border-[#8dd1ff]/40 hover:bg-white/[0.08] hover:shadow-[0_20px_60px_-20px_rgba(77,166,255,0.45)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8dd1ff]">
                Selected work
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                Games, research, and shipped products
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                BlueRobins, UnstableREM, MobileCybench, Interdex.ai, and a full archive of programming and studio projects.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] px-6 py-3 font-semibold text-white shadow-lg shadow-[#4da6ff]/20 transition-transform duration-300 group-hover:scale-[1.04]">
                View Projects
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
        
        <div className='text-[#AEC8A4] p-8 mt-8 mb-12'>
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff]'>
              Test
            </span>
            imonials
          </h1>
          <div className="mx-auto mb-6 h-1 w-60 lg:w-90 rounded bg-gray-400 opacity-40"></div>
          <div className="grid grid-cols-1 gap-10 mt-12">
            <Testimonial
              name="Scott, Usher"
              position="eSTEM Academy"
              image="/images/test_2.jpg"
              quote="Brian is attentive, on task, well-organized, and one step ahead. He is an effective communicator in collaborative activities. He learned Java and JavaScript in the classroom, but self-taught other programming languages and explored various Integrated Development Environment IDEs that he used to develop projects for academic competitive events."
            />
          </div>
        </div>
        <div className='text-[#AEC8A4] p-8 mt-12 mb-12 z-80'>
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold text-center z-20">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] z-20'>
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
                className={"bg-[#2e3b4e] rounded-xl p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform z-80" + (skill.className || "")}
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