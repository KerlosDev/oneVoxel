'use client';
import React, { useState } from 'react'
import { IoCubeSharp } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import GooeyNav from './ui/GooeyNav'

const Nav = () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
    ];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1100px] bg-white/6 border border-white/12 backdrop-blur-lg rounded-full px-4.5 py-2.5 shadow-[0_6px_20px_rgba(2,6,23,0.45)] z-50" aria-label="Main navigation">
            <div className="w-full flex items-center justify-between gap-3">
                <div className='flex gap-2 font-bold text-2xl md:text-4xl place-items-center'>
                    <IoCubeSharp /> one voxel
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-5.5 items-center list-none m-0 p-0">
                    <GooeyNav
                        items={items}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />      <li><a href="#joinupnow" className="no-underline text-lg font-bold rounded-full transition-all duration-150 ease-in-out flex place-items-center gap-2 hover:bg-white/80 bg-white px-3 py-2 text-black"><span><FaUser></FaUser></span>Join Up Now</a></li>
                </ul>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg rounded-2xl p-4 md:hidden">
                        <ul className="flex flex-col gap-4 list-none m-0 p-0">
                            <li><a href="#" className="text-white/90 no-underline text-sm px-2 py-1.5 font-bold rounded-lg transition-all duration-150 ease-in-out hover:bg-white/4 block">Home</a></li>
                            <li><a href="#about" className="text-white/90 no-underline text-sm px-2 py-1.5 font-bold rounded-lg transition-all duration-150 ease-in-out hover:bg-white/4 block">About</a></li>
                            <li><a href="#services" className="text-white/90 no-underline text-sm px-2 py-1.5 font-bold rounded-lg transition-all duration-150 ease-in-out hover:bg-white/4 block">Services</a></li>
                            <li><a href="#contact" className="text-white/90 no-underline text-sm px-2 py-1.5 font-bold rounded-lg transition-all duration-150 ease-in-out hover:bg-white/4 block">Contact</a></li>
                            <li><a href="#joinupnow" className="no-underline text-sm font-bold rounded-lg transition-all duration-150 ease-in-out hover:bg-white/80 bg-white p-3 text-black text-center">Join Up Now</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Nav