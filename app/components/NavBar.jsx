import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import NavAnchor from './NavAnchor'

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-20 bg-[#222] bg-opacity-80 z-[200] shadow-lg flex items-center px-8">
            <Link href={"/"} className='text-xl md:text-2xl lg:text-3xl text-white font-semibold flex items-center mr-10'>
                <Image
                    src="/images/nav_img.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="w-6 h-6 md:w-12 md:h-12 object-contain mr-2"
                />
                Brian Wang
            </Link>
            <ul className="flex flex-row space-x-2 lg:space-x-10 ml-auto">
                <NavLink href={"/"} title={"Home"} />
                <NavLink href={"/projects"} title={"Projects"} />
                <NavLink href={"/contact"} title={"Contact"} />
            </ul>
        </nav>
    )
}

export default NavBar