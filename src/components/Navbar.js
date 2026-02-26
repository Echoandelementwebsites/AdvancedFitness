"use client"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-heading font-bold uppercase tracking-wider text-primary hover:text-gray-900 transition-colors">
                    Advanced<span className="text-gray-900">Fitness</span>
                </Link>
                <ul className="hidden md:flex space-x-8 font-heading uppercase tracking-wide text-sm font-medium text-gray-700">
                    <li><a href="#about" className="hover:text-primary transition-colors duration-300">About</a></li>
                    <li><a href="#services" className="hover:text-primary transition-colors duration-300">Classes</a></li>
                    <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
                </ul>
                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-900 hover:text-primary"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <ul className="flex flex-col p-4 space-y-4 font-heading uppercase tracking-wide text-sm font-medium text-gray-900">
                        <li><a href="#about" className="block hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>About</a></li>
                        <li><a href="#services" className="block hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Classes</a></li>
                        <li><a href="#contact" className="block hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
export default Navbar
