'use client';
import React from 'react'
import Beams from './ui/Beams';
import Nav from './Nav';
import BlurText from "./ui/BlurText";
import TrueFocus from './ui/TrueFocus';
import CurverLoop from './ui/CurverLoop';
import { IoCubeSharp } from 'react-icons/io5';

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Hero = () => {
    return (
        <div className="relative h-screen bg-black">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Beams
                        beamWidth={5}
                        beamHeight={40}
                        beamNumber={15}
                        lightColor="#ffffff"
                        speed={1.5}
                        noiseIntensity={2}
                        scale={0.3}
                        rotation={45}
                    />
                </div>
                <div className="fixed w-full top-0 left-0 z-100">
                    <Nav />
                </div>
                <div className="relative z-50 text-center space-y-8 flex flex-col items-center justify-center px-4 md:px-0 max-w-4xl mx-auto">

                    <h3 className="font-bold border-[1px] flex place-items-center gap-3 border-white/20 px-4 backdrop-blur-xl p-2 rounded-full text-xl md:text-sm"><span><IoCubeSharp /></span>Build Deploy Scale</h3>

                    <TrueFocus
                        sentence='Here we craft "ART"'
                        manualMode={false}
                        blurAmount={5}
                        borderColor="red"
                        animationDuration={0.2}
                        pauseBetweenAnimations={2}
                    />
                    <div className="flex flex-col  sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <button className="w-full font-switzer   sm:w-auto px-8 py-4 rounded-full bg-white text-black  hover:bg-opacity-90 transition-all duration-300">
                            Get Started
                        </button>
                        <button className="w-full  font-switzer sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font- hover:bg-white/20 transition-all duration-300">
                            Learn More
                        </button>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default Hero