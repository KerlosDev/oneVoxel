import React from 'react'

const Services = () => {
    return (
        <section className="bg-black text-white py-16 px-4 font-switzer">
            <div className="max-w-7xl mx-auto">
                {/* Services Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-voxel mb-4">
                        Services
                    </h2>
                    <div className="w-8 h-0.5 bg-voxel mx-auto"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Web Apps */}
                    <div className="text-center">
                        <div className="bg-voxel rounded-2xl aspect-[4/5] mb-6 mx-auto max-w-sm"></div>
                        <h3 className="text-xl font-light text-voxel mb-4">Web Apps</h3>
                        <a href="/services/web-apps" className="border border-voxel text-voxel px-6 py-2 rounded-full text-sm hover:bg-voxel hover:text-black transition-colors inline-block">
                            Discover More
                        </a>
                    </div>

                    {/* Mobile Apps */}
                    <div className="text-center">
                        <div className="bg-voxel rounded-2xl aspect-[4/5] mb-6 mx-auto max-w-sm"></div>
                        <h3 className="text-xl font-light text-voxel mb-4">Mobile Apps</h3>
                        <a href="/services/mobile-apps" className="border border-voxel text-voxel px-6 py-2 rounded-full text-sm hover:bg-voxel hover:text-black transition-colors inline-block">
                            Discover More
                        </a>
                    </div>

                    {/* Desktop Apps */}
                    <div className="text-center">
                        <div className="bg-voxel rounded-2xl aspect-[4/5] mb-6 mx-auto max-w-sm"></div>
                        <h3 className="text-xl font-light text-voxel mb-4">Desktop Apps</h3>
                        <a href="/services/desktop-apps" className="border border-voxel text-voxel px-6 py-2 rounded-full text-sm hover:bg-voxel hover:text-black transition-colors inline-block">
                            Discover More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services