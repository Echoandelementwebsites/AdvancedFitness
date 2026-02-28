"use client"
import Link from 'next/link'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-heading font-bold uppercase tracking-wider text-primary hover:text-gray-900 transition-colors">
                    Advanced<span className="text-gray-900">Fitness</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 font-heading uppercase tracking-wide text-sm font-medium text-gray-700">
                        <li><a href="#about" className="hover:text-primary transition-colors duration-300">About</a></li>
                        <li><a href="#schedule" className="hover:text-primary transition-colors duration-300">Schedule</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a></li>
                    </ul>
                    <a href="https://wa.me/254700000000" className="flex items-center gap-2 bg-primary hover:bg-rose-600 text-white font-heading uppercase tracking-wide text-sm px-5 py-2.5 rounded-none transition-colors duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 border border-primary">
                        <FaWhatsapp className="text-lg" />
                        <span>Chat with us</span>
                    </a>
                </div>

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
                        <li><a href="#schedule" className="block hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Schedule</a></li>
                        <li><a href="#contact" className="block hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</a></li>
                        <li className="pt-2 border-t border-gray-100">
                            <a href="https://wa.me/254700000000" className="flex items-center justify-center gap-2 bg-primary text-white font-heading uppercase tracking-wide py-3 px-4 w-full transition-colors duration-300">
                                <FaWhatsapp className="text-xl" />
                                <span>Chat with us on WhatsApp</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
export default Navbar
