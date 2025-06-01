import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import NavAnchor from './NavAnchor'

const navLinks = [
    {
        title:"About",
        path: "#about",
    },
    {
        title:"Projects",
        path: "#projects",
    },
    {
        title:"Contact",
        path: "#contact",
    }
]

const NavBar = () => {
    return (
        <nav className='sticky top-0 z-100 select-none mt-5 ml-0 mr-0 sm:ml-2 sm:mr-1'>
            <div className='flex flex-wrap items-center justify-between mx-auto pl-4 sm:p-8'>
                <Link href={"/"} className='text-5xl text-white font-semibold'>
                    <div className="inline-block mr-2 transition-transform duration-300 ease-in-out hover:scale-105">
                        <Image
                            src="/images/nav_img.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain hover:filter hover:invert-100 transition-all duration-300 ease-in-out"
                        />
                    </div>
                </Link>
                <div className='menu block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0'>
                        {/*<NavLink href = {link.path} title={link.title}/>*/}
                        <NavAnchor href={"/#about"} title={"About"}/>
                        <NavLink href={"/projects"} title={"Projects"}/>
                        <NavLink href={"/contact"} title={"Contact"}/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar