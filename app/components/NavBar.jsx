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
        <nav className='select-none mt-5 ml-2 mr-3'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={"/"} className='text-5xl text-white font-semibold'>
                    <div className="inline-block mr-2 transition-transform duration-300 ease-in-out hover:scale-105">
                        <Image
                            src="/images/nav_img.png"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </Link>
                <div className='menu block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0'>
                        {/*<NavLink href = {link.path} title={link.title}/>*/}
                        <NavAnchor href={"#about"} title={"About"}/>
                        <NavLink href={"/"} title={"Projects"}/>
                        <NavLink href={"/"} title={"Contact"}/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar