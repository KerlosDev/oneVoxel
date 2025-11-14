'use client';
import React from 'react'
import Nav from './Nav';

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const HeroCont = () => {
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
                      Got a question? We have the answer!
                    </h1>

                    <div className="mt-10 flex justify-center items-center gap-6">
                        <button className="bg-voxel font-switzer text-black px-8 py-3 rounded-lg font-medium shadow-sm hover:shadow-md transition">
                          Contact Us
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default HeroCont