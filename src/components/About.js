import React from "react"

import Link from 'next/link'

const About = () => {
    return (
        <section id="our-story" className="py-24 bg-white text-gray-900 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Accent Line */}
                        <div className="hidden md:block w-1 h-auto self-stretch bg-primary"></div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 uppercase text-gray-900 tracking-wide">
                                <span className="text-primary">Our</span> Story
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-light">
                                Before it was a gym, it was just a store. A quiet warehouse. Concrete floors, steel doors, space with no audience — only potential.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-light">
                                Inside that warehouse, the owner trained alone. No mirrors for show, no crowds for validation. Just discipline, consistency, and a deep respect for the craft of training. Fitness wasn’t a business then — it was personal. It was therapy. It was purpose.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-light">
                                But greatness never stays hidden for long.
                            </p>
                            <Link href="/our-story" className="inline-block bg-primary hover:bg-rose-600 text-white font-heading uppercase tracking-wide text-sm px-6 py-3 transition-colors duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 border border-primary">
                                Read more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
