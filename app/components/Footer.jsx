'use client';
import React, { useState } from 'react'
import { IoCubeSharp } from 'react-icons/io5';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdArrowUpward } from 'react-icons/md';
import { HiOutlineExternalLink } from 'react-icons/hi';
import TextD from './TextD';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
        { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble', color: 'hover:text-pink-400' },
        { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-purple-400' },
    ];

    const navigationLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'Mobile Applications', href: '#mobile' },
        { name: 'UI/UX Design', href: '#design' },
        { name: 'Brand Identity', href: '#branding' },
        { name: 'Digital Strategy', href: '#strategy' },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black text-white overflow-hidden min-h-screen">
            {/* Grid background with fade */}
            <div className="absolute inset-0">
                {/* Base background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900/50 to-black" />

                {/* Primary Grid pattern - more visible */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Secondary larger grid with blue accent */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.4) 2px, transparent 2px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 2px, transparent 2px)
                        `,
                        backgroundSize: '120px 120px'
                    }}
                />

                {/* Grid fade effects - less aggressive */}
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/80" />
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60" />

                {/* Animated light orbs - more visible */}
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl" />

                {/* Radial fade from center - less aggressive */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.5) 100%)'
                    }}
                />
            </div>

            <div className="relative z-10">
                {/* Main footer content */}
                <div className="max-w-7xl font-switzer mx-auto px-6 pb-20 lg:px-8">

                    {/* Top section with CTA */}
                    <div className="text-center mb-20">
                         

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            Let&apos;s create something
                            <br />
                            <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                extraordinary together
                            </span>
                        </h2>

                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Ready to transform your ideas into stunning digital experiences?
                            Let&apos;s start the conversation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                                <span className="flex items-center gap-2">
                                    Start a Project
                                    <HiOutlineExternalLink className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 font-semibold">
                                View Our Work
                            </button>
                        </div>
                    </div>

                    {/* Links grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30" />
                                    <div className="relative p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                        <IoCubeSharp className="text-3xl text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        One Voxel
                                    </h3>
                                     <p className="text-base text-blue-400 font-medium">Crafting Digital Art</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
                                We&apos;re a creative digital studio specializing in cutting-edge web experiences.
                                Our passion lies in transforming ideas into pixel-perfect realities.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <a href="mailto:hello@onevoxel.studio" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                        <MdEmail className="text-xl" />
                                    </div>
                                    <span className="font-medium">hello@onevoxel.studio</span>
                                </a>
                                <a href="tel:+15551234567" className="group flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300">
                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                        <MdPhone className="text-xl" />
                                    </div>
                                    <span className="font-medium">+1 (555) 123-4567</span>
                                </a>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-2 rounded-lg bg-white/5">
                                        <MdLocationOn className="text-xl" />
                                    </div>
                                    <span className="font-medium">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="text-xl font-bold mb-8 text-white">Navigation</h4>
                            <ul className="space-y-4">
                                {navigationLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300" />
                                            <span className="font-medium">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-xl font-bold mb-8 text-white">Services</h4>
                            <ul className="space-y-4">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href={service.href}
                                            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                                        >
                                            <span className="w-0 group-hover:w-4 h-px bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300" />
                                            <span className="font-medium">{service.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-white/5 to-white/10 rounded-3xl blur-xl" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                                <div className="text-center lg:text-left">
                                    <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        Stay in the loop
                                    </h4>
                                    <p className="text-gray-300 text-lg max-w-md">
                                        Get exclusive insights, design tips, and early access to our latest projects.
                                    </p>
                                </div>

                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full sm:w-80 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubscribed}
                                        className="px-8 py-4 rounded-2xl bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                                    >
                                        {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                            {/* Copyright and Legal */}
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 mb-3 font-medium">
                                    © {currentYear} One Voxel Studio. All rights reserved.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-8">
                                    <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                                        Privacy Policy
                                    </a>
                                    <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                                        Terms of Service
                                    </a>
                                    <a href="#cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                                        Cookie Policy
                                    </a>
                                </div>
                            </div>

                            {/* Social Links and Back to Top */}
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className={`group p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 ${social.color} transition-all duration-300 transform hover:scale-110`}
                                        >
                                            <social.icon className="text-xl" />
                                        </a>
                                    ))}
                                </div>

                                <button
                                    onClick={scrollToTop}
                                    className="group p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                                    aria-label="Back to top"
                                >
                                    <MdArrowUpward className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer