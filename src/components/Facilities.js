import React from "react"
import Link from "next/link"
import { FaDumbbell, FaPray, FaFistRaised, FaRunning, FaBuilding, FaLayerGroup } from "react-icons/fa"
import { GiWeightLiftingUp } from "react-icons/gi"

const Facilities = () => {
    const facilities = [
        {
            title: "Ground Floor",
            description: "Reception & Cardio Zone",
            icon: <FaBuilding />,
            slug: "ground-floor",
        },
        {
            title: "Mezzanine Floor",
            description: "Mosque & Wellness Area",
            icon: <FaPray />,
            slug: "mezzanine",
        },
        {
            title: "1st Floor",
            description: "Main Gym & Equipment",
            icon: <FaDumbbell />,
            slug: "first-floor",
        },
        {
            title: "3rd Floor",
            description: "Boxing & Self-Defence",
            icon: <FaFistRaised />,
            slug: "third-floor",
        },
        {
            title: "4th Floor",
            description: "Strength & Bodybuilding",
            icon: <GiWeightLiftingUp />,
            slug: "fourth-floor",
        },
        {
            title: "5th Floor",
            description: "CrossFit Arena",
            icon: <FaRunning />,
            slug: "fifth-floor",
        },
        {
            title: "6th Floor",
            description: "Penthouse & Lounge",
            icon: <FaLayerGroup />,
            slug: "sixth-floor",
        },
    ]

    return (
        <section id="facilities" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform origin-top-right"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white tracking-wider mb-2">
                        Our <span className="text-primary">Facilities</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore our multi-level fitness complex designed to cater to every aspect of your training journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <Link href={`/facilities/${facility.slug}`} key={index} className="group">
                            <div className="h-full bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,0,51,0.15)]">
                                {/* Glow Effect */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                                <div className="relative z-10 flex flex-col items-start h-full">
                                    <div className="text-4xl text-primary mb-6 p-4 bg-zinc-900 rounded-lg border border-white/5 group-hover:border-primary/50 transition-colors">
                                        {facility.icon}
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-white uppercase mb-2 group-hover:text-primary transition-colors">
                                        {facility.title}
                                    </h3>

                                    <p className="text-gray-400 font-light mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                                        {facility.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                        View Gallery
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Facilities
