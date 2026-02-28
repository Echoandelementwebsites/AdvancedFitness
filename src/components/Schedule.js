import React from "react"

const Schedule = () => {

    const mainSchedule = [
        { day: "Monday", morning: "6:00 AM - 7:00 AM: Steps", evening1: "5:30 PM - 6:30 PM: Abs Class", evening2: "6:30 PM - 7:30 PM: Insanity" },
        { day: "Tuesday", morning: "6:00 AM - 7:00 AM: Taebo", evening1: "5:30 PM - 6:30 PM: Trampoline / Kangoo Shoes", evening2: "5:30 PM - 7:30 PM: Functional Fitness" },
        { day: "Wednesday", morning: "6:00 AM - 7:00 AM: Functional Fitness", evening1: "5:30 PM - 6:30 PM: Aerosticks", evening2: "6:30 PM - 7:30 PM: Steps" },
        { day: "Thursday", morning: "6:00 AM - 7:00 AM: Strength & Conditioning", evening1: "5:30 PM - 6:30 PM: Taebo", evening2: "6:30 PM - 7:30 PM: Kata Box" },
        { day: "Friday", morning: "5:30 AM - 7:30 PM: Spin Class", evening1: "6:00 PM - 7:00 PM: Spin Class", evening2: "" },
        { day: "Saturday", morning: "-", evening1: "7:00 AM - 10:00 PM: CHALLENGE", evening2: "", spanChallenge: true },
    ]

    const boxingSchedule = [
        { day: "Monday", morning: "6:00 AM - 7:00 AM: Boxercise", evening: "Boxercise" },
        { day: "Tuesday", morning: "", evening: "5:30 PM - 7:00 PM: Flexibility & Agility Boxing" },
        { day: "Wednesday", morning: "5:00 AM - 6:00 AM: HIIT", evening: "5:30 PM - 7:00 PM: HIIT + Yoga" },
        { day: "Thursday", morning: "", evening: "5:30 PM - 7:30 PM: Boxing Circuit" },
    ]

    const ladiesSchedule = [
        { day: "Monday", morning: "7:00 AM - 8:00 AM: Zumba", evening: "6:00 PM - 7:00 PM: Floor Aerobics" },
        { day: "Tuesday", morning: "7:00 AM - 8:00 AM: Spin", evening: "6:00 PM - 7:00 PM: Trampoline or Spin" },
        { day: "Wednesday", morning: "7:00 AM - 8:00 AM: Boxing", evening: "6:00 PM - 7:00 PM: HIIT" },
        { day: "Thursday", morning: "6:00 AM - 7:00 AM: Booty Class<br/>7:00 AM - 8:00 AM: Steps", evening: "6:00 PM - 7:00 PM: Zumba" },
        { day: "Friday", morning: "7:00 AM - 8:00 AM: Yoga", evening: "5:30 PM - 6:30 PM: Sculpting Class" },
        { day: "Saturday", morning: "7:00 AM - 8:00 AM: Spin", evening: "-" },
    ]

    return (
        <section id="schedule" className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FF0033 0%, transparent 50%)' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gray-900 tracking-wider mb-2">
                        Our <span className="text-primary">Schedule</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-16">
                    {/* Main Gym */}
                    <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 uppercase mb-6 border-b-2 border-primary pb-2 inline-block group-hover:text-primary transition-colors">Advanced Fitness Centre Limited Timetable (Main)</h3>

                        {/* Desktop Table */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-900 border-b border-gray-200 uppercase font-heading text-sm tracking-wider">
                                        <th className="p-4 w-1/4">Day</th>
                                        <th className="p-4 w-1/4">Morning</th>
                                        <th className="p-4 w-1/4">Evening (Slot 1)</th>
                                        <th className="p-4 w-1/4">Evening (Slot 2)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mainSchedule.map((row, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 font-bold text-gray-900">{row.day}</td>
                                            <td className="p-4 text-gray-600 font-light">{row.morning}</td>
                                            {row.spanChallenge ? (
                                                <td className="p-4 text-gray-600 font-light italic text-center bg-gray-50/50" colSpan={2}>
                                                    <span className="font-bold text-primary">{row.evening1}</span> <br/>
                                                    <span className="text-xs text-gray-400">(Spans both Morning and Evening)</span>
                                                </td>
                                            ) : (
                                                <>
                                                    <td className="p-4 text-gray-600 font-light">{row.evening1}</td>
                                                    <td className="p-4 text-gray-600 font-light">{row.evening2}</td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Accordion-style List */}
                        <div className="lg:hidden space-y-4">
                            {mainSchedule.map((row, index) => (
                                <div key={index} className="border border-gray-100 rounded-md p-4 bg-gray-50/30">
                                    <h4 className="font-heading font-bold text-lg text-primary uppercase border-b border-gray-200 pb-2 mb-3">{row.day}</h4>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">Morning:</span>
                                            <span className="text-gray-600 font-light">{row.morning || "-"}</span>
                                        </div>
                                        {row.spanChallenge ? (
                                            <div>
                                                <span className="font-bold text-gray-900 block mb-1">Challenge:</span>
                                                <span className="text-primary font-bold italic block">{row.evening1}</span>
                                                <span className="text-xs text-gray-400">(Spans both Morning and Evening)</span>
                                            </div>
                                        ) : (
                                            <>
                                                <div>
                                                    <span className="font-bold text-gray-900 block mb-1">Evening (Slot 1):</span>
                                                    <span className="text-gray-600 font-light">{row.evening1 || "-"}</span>
                                                </div>
                                                {row.evening2 && (
                                                    <div>
                                                        <span className="font-bold text-gray-900 block mb-1">Evening (Slot 2):</span>
                                                        <span className="text-gray-600 font-light">{row.evening2}</span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Boxing Gym */}
                    <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 uppercase mb-6 border-b-2 border-primary pb-2 inline-block group-hover:text-primary transition-colors">Boxing Gym (3rd Flr) Class Timetable</h3>

                        {/* Desktop Table */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-900 border-b border-gray-200 uppercase font-heading text-sm tracking-wider">
                                        <th className="p-4 w-1/3">Day</th>
                                        <th className="p-4 w-1/3">Morning</th>
                                        <th className="p-4 w-1/3">Evening</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {boxingSchedule.map((row, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 font-bold text-gray-900">{row.day}</td>
                                            <td className="p-4 text-gray-600 font-light">{row.morning}</td>
                                            <td className={`p-4 text-gray-600 font-light ${row.evening === 'Boxercise' ? 'text-center font-medium' : ''}`}>{row.evening}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Accordion-style List */}
                        <div className="lg:hidden space-y-4">
                            {boxingSchedule.map((row, index) => (
                                <div key={index} className="border border-gray-100 rounded-md p-4 bg-gray-50/30">
                                    <h4 className="font-heading font-bold text-lg text-primary uppercase border-b border-gray-200 pb-2 mb-3">{row.day}</h4>
                                    <div className="space-y-3 text-sm">
                                        {row.morning && (
                                            <div>
                                                <span className="font-bold text-gray-900 block mb-1">Morning:</span>
                                                <span className="text-gray-600 font-light">{row.morning}</span>
                                            </div>
                                        )}
                                        {row.evening && (
                                            <div>
                                                <span className="font-bold text-gray-900 block mb-1">Evening:</span>
                                                <span className={`text-gray-600 font-light ${row.evening === 'Boxercise' ? 'font-medium' : ''}`}>{row.evening}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ladies Gym */}
                    <div className="bg-white border border-gray-100 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 uppercase mb-6 border-b-2 border-primary pb-2 inline-block group-hover:text-primary transition-colors">Ladies Gym Class Timetable</h3>

                        {/* Desktop Table */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-900 border-b border-gray-200 uppercase font-heading text-sm tracking-wider">
                                        <th className="p-4 w-1/3">Day</th>
                                        <th className="p-4 w-1/3">Morning</th>
                                        <th className="p-4 w-1/3">Evening</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ladiesSchedule.map((row, index) => (
                                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 font-bold text-gray-900">{row.day}</td>
                                            <td className="p-4 text-gray-600 font-light" dangerouslySetInnerHTML={{ __html: row.morning }}></td>
                                            <td className="p-4 text-gray-600 font-light">{row.evening}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Accordion-style List */}
                        <div className="lg:hidden space-y-4">
                            {ladiesSchedule.map((row, index) => (
                                <div key={index} className="border border-gray-100 rounded-md p-4 bg-gray-50/30">
                                    <h4 className="font-heading font-bold text-lg text-primary uppercase border-b border-gray-200 pb-2 mb-3">{row.day}</h4>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">Morning:</span>
                                            <span className="text-gray-600 font-light" dangerouslySetInnerHTML={{ __html: row.morning }}></span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">Evening:</span>
                                            <span className="text-gray-600 font-light">{row.evening}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Schedule
