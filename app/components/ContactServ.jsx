import React from 'react'

const ContactServ = () => {
    return (
        <section className=" bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                            Did you find what you
                            <span className="block text-voxel">really need?</span>
                        </h2>
                        <p className="text-xl text-voxel leading-relaxed">
                            Transform your vision into reality with our comprehensive solutions.
                        </p>
                        <button className="group bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20">
                            <span className="flex items-center gap-2">
                                Get Started
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                            Need something
                            <span className="block text-voxel">different?</span>
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Don&apos;t worry. Our expert team is here to help you find the perfect solution tailored to your specific needs.
                        </p>
                        <button className="group border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20">
                            <span className="flex items-center gap-2">
                                Contact Our Team
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.72-.424l-3.178 1.059 1.059-3.178A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactServ