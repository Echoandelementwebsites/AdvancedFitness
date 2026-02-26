import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaDumbbell, FaPray, FaFistRaised, FaRunning, FaBuilding, FaLayerGroup } from "react-icons/fa"
import { GiWeightLiftingUp } from "react-icons/gi"

const Facilities = () => {
    const facilities = [
        {
            title: "Ground Floor",
            description: "Reception",
            icon: <FaBuilding />,
            slug: "ground-floor",
            image: "/images/facilities/ground-floor/ground-floor-1.jpeg",
        },
        {
            title: "Mezzanine Floor",
            description: "Mosque & Wellness Area",
            icon: <FaPray />,
            slug: "mezzanine",
            image: "/images/facilities/mezzanine/mezzanine-1.jpeg",
        },
        {
            title: "1st Floor",
            description: "Main Gym & Equipment",
            icon: <FaDumbbell />,
            slug: "first-floor",
            image: "/images/facilities/first-floor/first-floor-1.jpeg",
        },
        {
            title: "3rd Floor",
            description: "Boxing & Self-Defence",
            icon: <FaFistRaised />,
            slug: "third-floor",
            image: "/images/facilities/third-floor/third-floor-1.jpeg",
        },
        {
            title: "4th Floor",
            description: "Strength & Bodybuilding",
            icon: <GiWeightLiftingUp />,
            slug: "fourth-floor",
            image: "/images/facilities/fourth-floor/fourth-floor-1.jpeg",
        },
        {
            title: "5th Floor",
            description: "Functional Fitness",
            icon: <FaRunning />,
            slug: "fifth-floor",
            image: "/images/facilities/fifth-floor/fifth-floor-1.jpeg",
        },
        {
            title: "6th Floor",
            description: "Penthouse & Lounge",
            icon: <FaLayerGroup />,
            slug: "sixth-floor",
            image: "/images/facilities/sixth-floor/sixth-floor-1.jpeg",
        },
    ]

    return (
        <section id="facilities" className="py-24 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 transform origin-top-right"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gray-900 tracking-wider mb-2">
                        Our <span className="text-primary">Facilities</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore our multi-level fitness complex designed to cater to every aspect of your training journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <Link href={`/facilities/${facility.slug}`} key={index} className="group">
                            <div className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col">

                                {/* Image Container (Top Half) */}
                                <div className="h-64 w-full relative overflow-hidden">
                                    <Image
                                        src={facility.image}
                                        alt={facility.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Icon Overlay */}
                                    <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl text-primary text-2xl shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                        {facility.icon}
                                    </div>
                                </div>

                                {/* Content Container (Bottom Half) */}
                                <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                                    <h3 className="text-2xl font-heading font-bold text-gray-900 uppercase mb-2 group-hover:text-primary transition-colors">
                                        {facility.title}
                                    </h3>

                                    <p className="text-gray-500 font-light mb-6 flex-grow">
                                        {facility.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors mt-auto">
                                        View Gallery
                                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
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
