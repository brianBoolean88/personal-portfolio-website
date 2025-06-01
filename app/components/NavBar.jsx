import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import NavAnchor from './NavAnchor'

const NavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            {/* Hamburger Button */}
            <button
                className="fixed top-6 left-6 z-20 flex flex-col justify-center items-center w-10 h-10 bg-[#222] rounded-md"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </button>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 z-[150] transition-opacity duration-300
                    ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 lg:w-84 bg-[#222] z-[200] shadow-lg transform transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-6">
                    <Link href={"/"} className='text-3xl text-white font-semibold flex items-center'>
                        <Image
                            src="/images/nav_img.png"
                            alt="Logo"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain mr-2"
                        />
                        Brian Wang
                    </Link>
                    {/* Close button for mobile */}
                    <button
                        className="text-white text-2xl"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                    >
                        &times;
                    </button>
                </div>
                <ul className="flex flex-col space-y-10 px-6 mt-20">
                    <NavLink href={"/"} title={"Home"} onClick={() => setSidebarOpen(false)} />
                    <NavAnchor href={"/#about"} title={"About"} onClick={() => setSidebarOpen(false)} />
                    <NavLink href={"/projects"} title={"Projects"} onClick={() => setSidebarOpen(false)} />
                    <NavLink href={"/contact"} title={"Contact"} onClick={() => setSidebarOpen(false)} />
                </ul>
            </aside>
        </>
    )
}

export default NavBar