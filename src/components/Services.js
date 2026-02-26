import React from "react"
import Image from "next/image"
import service1 from "../images/service-1.jpg"
import service2 from "../images/service-2.jpg"

const Services = () => {

    const services = [
        {
            title: "Boxing & Kickboxing",
            description: "Master the art of striking with our expert coaches. High intensity, high reward.",
            image: service1,
        },
        {
            title: "Strength & Conditioning",
            description: "Build raw power and endurance with our comprehensive weight training zone.",
            image: service2,
        },
        {
            title: "Personal Training",
            description: "Get a tailored program designed specifically for your body and goals.",
            image: null, // Fallback to icon or text specific styling
            isSpecial: true,
        },
    ]

    return (
        <section id="services" className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FF0033 0%, transparent 50%)' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gray-900 tracking-wider mb-2">
                        Our <span className="text-primary">Classes</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white border border-gray-200 rounded-none overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                            <div className="relative z-10 h-full flex flex-col">
                                {service.image ? (
                                    <div className="h-64 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-64 bg-gray-100 flex items-center justify-center border-b border-gray-100 group-hover:border-primary/50 transition-colors">
                                        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">⚡</span>
                                    </div>
                                )}
                                <div className="p-8 bg-white group-hover:bg-white transition-colors flex-grow">
                                    <h3 className="text-2xl font-heading font-bold mb-4 uppercase italic text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
