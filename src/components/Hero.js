import React from "react"
import Image from "next/image"
import heroImg from "../images/hero.jpg"

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-dark text-white overflow-hidden flex items-center pt-20 md:pt-0">
            {/* Background Elements (Subtle) */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 h-full relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center h-full">

                    {/* Left Column: Text */}
                    <div className="flex flex-col justify-center text-left py-12 md:py-0 order-2 md:order-1">
                        <div className="inline-block px-3 py-1 mb-6 border-l-4 border-primary bg-white/5 backdrop-blur-sm w-fit">
                            <span className="text-primary font-heading uppercase tracking-widest text-sm font-bold">Nairobi's Premier Gym</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-tight leading-none">
                            TRANSFORM <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">YOUR BODY</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg font-light leading-relaxed">
                            Experience the ultimate fitness journey with state-of-the-art equipment, elite personal training, and a community that drives results.
                            From HIIT to heavy lifting, we have it all.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <a
                                href="#contact"
                                className="bg-primary hover:bg-rose-600 text-white font-heading font-bold uppercase tracking-wider py-4 px-10 text-center rounded-none transform transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] border border-primary"
                            >
                                START NOW
                            </a>
                            <a
                                href="https://wa.me/254700000000"
                                className="bg-transparent border border-white/30 hover:border-white text-white font-heading font-bold uppercase tracking-wider py-4 px-10 text-center rounded-none backdrop-blur-sm transition-all hover:bg-white/10"
                            >
                                WHATSAPP US
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-gray-500 text-sm font-heading uppercase tracking-wide">
                           <span className="flex items-center gap-2"><span className="text-primary">•</span> High End Equipment</span>
                           <span className="flex items-center gap-2"><span className="text-primary">•</span> Expert Coaches</span>
                           <span className="flex items-center gap-2"><span className="text-primary">•</span> Open 24/7</span>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[400px] md:h-[700px] w-full flex items-center justify-center order-1 md:order-2">
                        {/* Glow effect behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full z-0"></div>

                        <div className="relative w-full h-full z-10">
                            {/* Image Frame */}
                             <Image
                                src={heroImg}
                                alt="Advanced Fitness Gym Athlete"
                                fill
                                className="object-cover rounded-none md:rounded-tl-[5rem] md:rounded-br-[5rem] shadow-2xl shadow-black/50 grayscale-[20%]"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay Gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:to-dark/20 mix-blend-overlay pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
