import React from 'react'
import { PiCursorClickFill } from "react-icons/pi";

const Aboutus = () => {
    const milestones = [
        {
            date: "20 July 2025",
            title: "Planning Started",
            description: "Initial project conception and strategic planning phase"
        },
        {
            date: "14 August 2025",
            title: "First Launch (Delayed)",
            description: "First product launch with initial feature set"
        },
        {
            date: "31 August 2025",
            title: "Second Launch (Delayed)",
            description: "Enhanced version with improved functionality"
        },
        {
            date: "25 September 2025",
            title: "Third Launch (Delayed)",
            description: "Major feature update and performance improvements"
        },

    ]

    return (
        <div className="bg-black min-h-screen py-20 px-4 relative overflow-hidden font-switzer">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-voxgred/20 via-black to-voxgred/20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-voxel mb-4">
                        About Us
                    </h2>
                    <div className="w-8 h-0.5 bg-voxel mx-auto"></div>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline wrapper */}
                    <div className="relative overflow-x-auto py-12">
                        <div className="flex items-center justify-center min-w-max space-x-16 px-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative flex flex-col items-center group">
                                    {/* Timeline content */}
                                    <div className="text-center mb-12 w-56 transform transition-transform duration-300 hover:-translate-y-2">
                                        <div className="bg-voxgred/40 backdrop-blur-sm border border-backvox/50 rounded-xl p-5 shadow-lg hover:shadow-xl hover:bg-voxgred/60 transition-all duration-300">
                                            <div className="text-voxel text-xs font-semibold mb-3 tracking-widest uppercase opacity-80">
                                                {milestone.date}
                                            </div>
                                            <h3 className="text-white text-lg font-bold mb-3 leading-tight">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-voxel text-sm leading-relaxed opacity-90">
                                                {milestone.description}
                                            </p>
                                        </div>

                                        {/* Connecting line from card to dot */}

                                        <div className="w-px h-8 bg-voxel mx-auto mt-4 mb-4"></div>




                                    </div>



                                </div>

                            ))}


                        </div>
                        {/* Main timeline line */}
                        <div className="  right-8 h-0.5 bg-voxel z-10 transform -translate-y-1/2">
                            {/* Gradient overlay for depth */}
                        </div>
                    </div>


                </div>

                {/* Discover the full story section */}
                <div className="text-center flex flex-col items-center justify-center mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-voxel mb-8">
                        Discover the full story from the button below
                    </h3>
                    <a
                        href="#"
                        className="bg-voxel flex items-center justify-center gap-2 hover:bg-voxel/80 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 no-underline"
                    >
                        <PiCursorClickFill />
                        Click Here
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Aboutus