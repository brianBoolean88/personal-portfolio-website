"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { CardBody, CardContainer, CardItem } from "/app/ui/3d-card";
import ThreeDPin from './ThreeDPin'
import Testimonial from './Testimonial.jsx';

const HeroSection = () => {
    return (
        <div className='select-none'>
            <section id="hero">
                <div className='grid grid-cols-1 lg:grid-cols-12 z-in'>
                    {/* Left side */}
                    <div className='col-span-7 place-self-center text-center lg:text-left'>
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
                            <button
                                className='select-none px-6 py-3 w-full lg:w-fit rounded-full mr-4 bg-gradient-to-br from-[#E7EFC7] via-[#AEC8A4] to-[#8A784E] hover:bg-transparent text-white text-xl'
                                aria-label=''>
                                Hire Me
                            </button>
                            <button
                                className='select-none px-6 py-3 w-full lg:w-fit rounded-full mr-4 bg-transparent hover:bg-[#AEC8A4] text-white border border-white mt-4 text-xl'
                                aria-label='Downloads my resume.'
                            >
                                Download CV
                            </button>
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
                        I’m a UC Berkeley EECS student passionate about bridging hardware and software. I’ve led teams in robotics, computer science, and cybersecurity competitions, as well as real-world projects that have reached over 60,000 impressions on YouTube. I thrive on collaboration and clear communication, working with others to achieve ambitious goals. Outside of tech, I value balance—prioritizing sleep, fitness, time management, and productivity.
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        <Testimonial
                            name="Linda Ho"
                            position="AP Language & Composition Teacher, eSTEM Academy"
                            image="/images/test_1.jpg"
                            quote="I have observed from him the utmost care and attention to answering not only complex math and philosophical, but also simple questions. He explores nuanced texts thoroughly and aims to dedicate thought and consideration to develop his responses whether written or verbal."
                        />
                        <Testimonial
                            name="Scott Usher"
                            position="AP CSA Teacher, eSTEM Academy"
                            image="/images/test_2.jpg"
                            quote="In the classroom, Brian is attentive, on task, well-organized, and one step ahead. Brian is an effective communicator in collaborative activities, responsive to in-class discussions, and will ask questions to clarify instructions or out of curiosity."
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


                </div>

            </section>
        </div>

    )
}

export default HeroSection