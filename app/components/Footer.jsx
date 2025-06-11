import Image from "next/image";

export const Footer = () => {
    return (
        <div className="w-full bg-[#253629] pt-16 px-3 pb-10">
            <div className="grid gap-16 row-gap-10 mb-5 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <Image
                            src="/images/hero_img.png"
                            alt="Hero Image"
                            className=''
                            width={50}
                            height={50}
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                            BRIAN WANG
                        </span>
                    </a>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-white">
                            I'm a Berkeley EECS student with a passion for technology and entrepreneurship.
                        </p>
                        <p className="mt-4 text-sm text-white">
                            I love building things that make a difference in the world. Whether it's through coding, design, or business strategy, I'm always looking for ways to innovate and create value.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-semibold tracking-wide text-white">
                            Category
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/#about"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-white">
                            Social Media
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="https://www.youtube.com/watch?v=9tTtR3KgL6A&t"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Project Agile Devlog 0
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/1-ky1dN1JSqNPBXM306B4XdPFnr9m8Je5/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Advanced Combat System
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.tiktok.com/@togahttps/video/7399158853872520478"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Advanced AI Combat Systems
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://nightmoondev.carrd.co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Roblox Commission Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-white">Language Specializations</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="https://cplusplus.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    C++
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://nextjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    NextJS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://flutter.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Flutter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://flask.palletsprojects.com/en/stable/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Flask/Python
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.postgresql.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    PostgreSQL
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-white">Education</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="https://estem.cnusd.k12.ca.us/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    eSTEM Academy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://roosevelt.cnusd.k12.ca.us/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    ERHS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.berkeley.edu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#7f9178] transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    UC Berkeley
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                <p className="text-sm text-white">
                    © {new Date().getFullYear()} Brian Wang. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a
                        href="https://www.linkedin.com/in/brian-wang-professional/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <Image
                            src={`/images/SVG/linkedin.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                    </a> 
                    <a
                        href="https://www.instagram.com/brianwanggg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <Image
                            src={`/images/SVG/instagram.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                    </a>
                    <a
                        href="https://github.com/brianBoolean88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <Image
                            src={`/images/SVG/github1.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                    </a>
                    <a
                        href="https://github.com/88BrianW"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                        <Image
                            src={`/images/SVG/github2.svg`}
                            alt={'LINK'}
                            width={25}
                            height={25}
                            className="mb-1 filter invert brightness-0"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};