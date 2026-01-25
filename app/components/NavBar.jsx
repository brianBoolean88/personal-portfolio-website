import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: "/", title: "Home", id: "home" },
        { href: "/projects", title: "Projects", id: "projects" },
        { href: "/contact", title: "Contact", id: "contact" }
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
                scrolled 
                    ? 'h-16 bg-[#1a1a1a]/95 backdrop-blur-xl shadow-2xl shadow-[#2e3b4e]/10' 
                    : 'h-20 bg-[#222]/60 backdrop-blur-md'
            }`}>
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-full">
                        
                        {/* Logo */}
                        <Link 
                            href="/" 
                            className="group flex items-center space-x-3 relative"
                        >
                            <div className={`relative transition-all duration-500 ${
                                scrolled ? 'w-10 h-10' : 'w-12 h-12'
                            }`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative bg-gradient-to-br from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] rounded-xl p-1">
                                    <Image
                                        src="/images/nav_imgv3.png"
                                        alt="Logo"
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                            
                            <span className={`font-bold bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] text-transparent bg-clip-text transition-all duration-500 ${
                                scrolled ? 'text-xl' : 'text-2xl'
                            }`}>
                                Brian W.
                            </span>
                            
                            {/* Animated underline */}
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] group-hover:w-full transition-all duration-300"></div>
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden md:flex items-center space-x-1">
                            {navItems.map((item, index) => (
                                <li key={item.id}>
                                    <Link 
                                        href={item.href}
                                        className="group relative px-4 py-2 text-white/80 hover:text-white transition-colors duration-300"
                                    >
                                        <span className="relative z-10 font-medium">
                                            {item.title}
                                        </span>
                                        
                                        {/* Hover background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#2e3b4e]/10 via-[#4da6ff]/10 to-[#8dd1ff]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Animated border */}
                                        <div className="absolute inset-0 border border-[#AEC8A4]/0 group-hover:border-[#AEC8A4]/30 rounded-lg transition-all duration-300"></div>
                                        
                                        {/* Bottom indicator */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] group-hover:w-3/4 transition-all duration-300"></div>
                                    </Link>
                                </li>
                            ))}
                            
                            {/* CTA Button */}
                            <li className="ml-8">
                                <a
                                    href="/files/Brian Wang's Resume.pdf"
                                    download
                                    className="group relative px-12 py-3.5 bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] rounded-full font-semibold text-gray-900 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#2e3b4e]/50 hover:scale-105"
                                >
                                    <span className="flex items-center space-x-2">
                                    <span>Resume</span>
                                    <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    </span>
                                </a>
                            </li>


                        </ul>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 flex flex-col justify-between">
                                <span className={`block h-0.5 bg-white transition-all duration-300 ${
                                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}></span>
                                <span className={`block h-0.5 bg-white transition-all duration-300 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}></span>
                                <span className={`block h-0.5 bg-white transition-all duration-300 ${
                                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] origin-left"
                     style={{
                         transform: `scaleX(${scrolled ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0})`,
                         transition: 'transform 0.1s ease-out'
                     }}
                ></div>
            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden fixed top-20 left-0 w-full bg-[#1a1a1a]/98 backdrop-blur-xl z-[199] transition-all duration-500 ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
            }`}>
                <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block group"
                            style={{
                                animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                            }}
                        >
                            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#AEC8A4]/5 to-transparent hover:from-[#AEC8A4]/20 transition-all duration-300 border border-transparent hover:border-[#AEC8A4]/30">
                                <span className="text-white text-lg font-medium">{item.title}</span>
                                <svg className="w-5 h-5 text-[#AEC8A4] group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                    
                    <a
                        href="/files/Brian Wang's Resume.pdf"
                        download
                        onClick={() => setMobileMenuOpen(false)}
                        className="block mt-4 p-4 bg-gradient-to-r from-[#2e3b4e] via-[#4da6ff] to-[#8dd1ff] rounded-xl text-center font-bold text-gray-900 hover:shadow-xl hover:shadow-[#AEC8A4]/30 transition-all duration-300"
                        style={{
                            animation: mobileMenuOpen ? `slideIn 0.3s ease-out 0.3s both` : 'none'
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    )
}

export default NavBar