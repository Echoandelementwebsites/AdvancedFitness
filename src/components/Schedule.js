"use client"
import React, { useState } from "react"

const Schedule = () => {
    const [activeTab, setActiveTab] = useState("main")

    const tabs = [
        { id: "main", label: "Main Gym" },
        { id: "boxing", label: "Boxing Gym" },
        { id: "ladies", label: "Ladies Gym" }
    ]

    return (
        <section id="schedule" className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FF0033 0%, transparent 50%)' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase text-gray-900 tracking-wider mb-2">
                        Our <span className="text-primary">Schedule</span>
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto"></div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-4 font-heading font-bold uppercase tracking-wider text-sm transition-all duration-300 border ${
                                activeTab === tab.id
                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                                    : "bg-white text-gray-900 border-gray-200 hover:border-primary/50 hover:text-primary hover:bg-gray-50"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden">
                    {activeTab === "main" && (
                        <div className="overflow-x-auto p-4 md:p-8">
                            <h3 className="text-2xl font-heading font-bold mb-6 uppercase text-gray-900 text-center">Advanced Fitness Centre Limited Timetable</h3>
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead>
                                    <tr>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[15%]">Day</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[28%]">Morning</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[28%]">Evening (Slot 1)</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[28%]">Evening (Slot 2)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Monday</td>
                                        <td className="p-4 text-gray-600">6:00 AM - 7:00 AM: Steps</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 6:30 PM: Abs Class</td>
                                        <td className="p-4 text-gray-600">6:30 PM - 7:30 PM: Insanity</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Tuesday</td>
                                        <td className="p-4 text-gray-600">6:00 AM - 7:00 AM: Taebo</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 6:30 PM: Trampoline / Kangoo Shoes</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 7:30 PM: Functional Fitness</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Wednesday</td>
                                        <td className="p-4 text-gray-600">6:00 AM - 7:00 AM: Functional Fitness</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 6:30 PM: Aerosticks</td>
                                        <td className="p-4 text-gray-600">6:30 PM - 7:30 PM: Steps</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Thursday</td>
                                        <td className="p-4 text-gray-600">6:00 AM - 7:00 AM: Strength & Conditioning</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 6:30 PM: Taebo</td>
                                        <td className="p-4 text-gray-600">6:30 PM - 7:30 PM: Kata Box</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Friday</td>
                                        <td className="p-4 text-gray-600">5:30 AM - 7:30 PM: Spin Class</td>
                                        <td className="p-4 text-gray-600">6:00 PM - 7:00 PM: Spin Class</td>
                                        <td className="p-4 text-gray-600">-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-bold text-gray-900">Saturday</td>
                                        <td className="p-4 text-gray-600 text-center" colSpan="3">
                                            <span className="font-bold text-primary">7:00 AM - 10:00 PM: CHALLENGE</span>
                                            <span className="block text-sm text-gray-500 mt-1 italic">(Spans both Morning and Evening)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === "boxing" && (
                        <div className="overflow-x-auto p-4 md:p-8">
                            <h3 className="text-2xl font-heading font-bold mb-6 uppercase text-gray-900 text-center">Boxing Gym (3rd Flr) Class Timetable</h3>
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[20%]">Day</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[40%]">Morning</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[40%]">Evening</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Monday</td>
                                        <td className="p-4 text-gray-600">6:00 AM - 7:00 AM: Boxercise</td>
                                        <td className="p-4 text-gray-600">Boxercise <span className="text-sm italic text-gray-400 block">(No time specified)</span></td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Tuesday</td>
                                        <td className="p-4 text-gray-600">-</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 7:00 PM: Flexibility & Agility Boxing</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Wednesday</td>
                                        <td className="p-4 text-gray-600">5:00 AM - 6:00 AM: HIIT</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 7:00 PM: HIIT + Yoga</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Thursday</td>
                                        <td className="p-4 text-gray-600">-</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 7:30 PM: Boxing Circuit</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Friday</td>
                                        <td className="p-4 text-gray-600">-</td>
                                        <td className="p-4 text-gray-600">-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-bold text-gray-900">Saturday</td>
                                        <td className="p-4 text-gray-600">-</td>
                                        <td className="p-4 text-gray-600">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === "ladies" && (
                        <div className="overflow-x-auto p-4 md:p-8">
                            <h3 className="text-2xl font-heading font-bold mb-6 uppercase text-gray-900 text-center">Ladies Gym Class Timetable</h3>
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[20%]">Day</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[40%]">Morning</th>
                                        <th className="p-4 bg-primary/5 border-b-2 border-primary text-primary font-heading font-bold uppercase w-[40%]">Evening</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Monday</td>
                                        <td className="p-4 text-gray-600">7:00 AM - 8:00 AM: Zumba</td>
                                        <td className="p-4 text-gray-600">6:00 PM - 7:00 PM: Floor Aerobics</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Tuesday</td>
                                        <td className="p-4 text-gray-600">7:00 AM - 8:00 AM: Spin</td>
                                        <td className="p-4 text-gray-600">6:00 PM - 7:00 PM: Trampoline or Spin</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Wednesday</td>
                                        <td className="p-4 text-gray-600">7:00 AM - 8:00 AM: Boxing</td>
                                        <td className="p-4 text-gray-600">6:00 PM - 7:00 PM: HIIT</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Thursday</td>
                                        <td className="p-4 text-gray-600">
                                            6:00 AM - 7:00 AM: Booty Class<br/>
                                            7:00 AM - 8:00 AM: Steps
                                        </td>
                                        <td className="p-4 text-gray-600">6:00 PM - 7:00 PM: Zumba</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                                        <td className="p-4 font-bold text-gray-900">Friday</td>
                                        <td className="p-4 text-gray-600">7:00 AM - 8:00 AM: Yoga</td>
                                        <td className="p-4 text-gray-600">5:30 PM - 6:30 PM: Sculpting Class</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="p-4 font-bold text-gray-900">Saturday</td>
                                        <td className="p-4 text-gray-600">7:00 AM - 8:00 AM: Spin</td>
                                        <td className="p-4 text-gray-600"><span className="italic text-gray-400">(No class listed)</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Schedule
