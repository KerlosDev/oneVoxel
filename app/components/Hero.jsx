'use client';
import React from 'react' 
import Nav from './Nav'; 

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Hero = () => {
    return (
        <div className="relative bg-black">
            {/* Nav at the top */}
            <div className="w-full top-0 left-0 z-50">
                <Nav />
            </div>

            {/* Centered rounded hero panel */}
            <div className="relative z-40 w-full flex items-start justify-center px-6 md:px-12 pt-32 pb-20">
                <div className="w-full max-w-6xl  bg-gradient-to-r  from-backvox  via-backvox to-black/5  rounded-3xl p-16 md:p-32 ">
                    <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-tight  text-voxel ">
                        Here where we craft <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">&quot;ART&quot;</span>
                    </h1>

                    <div className="mt-10 flex justify-center items-center gap-6">
                        <button className="bg-voxel text-black px-8 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition">
                            Request a Project
                        </button>
                        <button className="border border-white/10 text-gray-300 px-6 py-3 rounded-lg hover:bg-white/3 transition">
                            See More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero