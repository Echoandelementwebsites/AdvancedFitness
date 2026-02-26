import React from "react"

const About = () => {
    return (
        <section id="about" className="py-24 bg-white text-gray-900 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Accent Line */}
                        <div className="hidden md:block w-1 h-32 bg-primary"></div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 uppercase text-gray-900 tracking-wide">
                                <span className="text-primary">About</span> Us
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6 font-light">
                                Advanced Fitness is Nairobi's premier fitness destination. We believe in <span className="text-gray-900 font-medium">raw, authentic training</span> that gets results.
                                Whether you are a professional athlete or just starting your journey, our facility offers the atmosphere and
                                equipment you need to push your limits.
                            </p>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                                Located in the heart of Nairobi, we combine old-school bodybuilding values with modern functional training.
                                <span className="block mt-4 text-gray-900 font-heading uppercase tracking-widest text-sm">No gimmicks. Just iron, sweat, and progress.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
