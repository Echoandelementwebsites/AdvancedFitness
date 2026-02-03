import React from "react"
import Image from "next/image"
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa"
import contactImage from "../images/contact.jpg"

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src={contactImage}
                    alt="Contact Gym"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase text-white">Get In Touch</h2>
                <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-400 font-light">
                    Ready to start your transformation? Reach out to us directly.
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {/* WhatsApp */}
                    <a href="https://wa.me/254700000000" className="group bg-zinc-900/50 backdrop-blur-md p-10 border border-white/10 hover:border-green-500/50 hover:bg-zinc-900/80 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                            <FaWhatsapp className="text-3xl text-green-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2 uppercase">WhatsApp</h3>
                        <p className="text-gray-500 text-sm mb-4">Chat with us instantly</p>
                        <span className="block text-white font-bold tracking-wider group-hover:text-green-400 transition-colors">+254 700 000 000</span>
                    </a>

                    {/* Phone */}
                    <a href="tel:+254700000000" className="group bg-zinc-900/50 backdrop-blur-md p-10 border border-white/10 hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <FaPhone className="text-3xl text-blue-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2 uppercase">Call Us</h3>
                        <p className="text-gray-500 text-sm mb-4">Speak to a trainer</p>
                        <span className="block text-white font-bold tracking-wider group-hover:text-blue-400 transition-colors">+254 700 000 000</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:info@advancedfitness.co.ke" className="group bg-zinc-900/50 backdrop-blur-md p-10 border border-white/10 hover:border-primary/50 hover:bg-zinc-900/80 transition-all duration-300">
                        <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <FaEnvelope className="text-3xl text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-heading font-bold mb-2 uppercase">Email</h3>
                        <p className="text-gray-500 text-sm mb-4">Send us an inquiry</p>
                        <span className="block text-white font-bold tracking-wider group-hover:text-primary transition-colors">info@advancedfitness.co.ke</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
