import React from 'react'

const Form = () => {
    return (
        <footer className="bg-black text-voxel px-6 py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Section - Company Info */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-white text-5xl font-switzer font-semibold mb-12 leading-tight">
                            Ready to transform<br />
                            your ideas into reality?
                        </h2>

                        <div className="space-y-8">
                            <h3 className="text-white text-2xl font-switzer font-medium">
                                Why choose One Voxel?
                            </h3>

                            <div className="space-y-6 text-voxel text-lg">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 shrink-0"></div>
                                    <p>Industry-leading expertise in digital innovation</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 shrink-0"></div>
                                    <p>Collaborative approach with transparent communication</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 shrink-0"></div>
                                    <p>Cutting-edge technology and proven methodologies</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full mt-3 shrink-0"></div>
                                    <p>Dedicated support throughout your project journey</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-voxgred rounded-3xl p-10 shadow-2xl border border-gray-800">
                    <div className="text-center mb-10">
                        <h3 className="text-white text-3xl font-switzer font-semibold mb-3">Let&apos;s Connect</h3>
                        <p className="text-voxel text-lg">Tell us about your project and let&apos;s create something amazing together.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Company</label>
                                <input
                                    type="text"
                                    placeholder="Your company name"
                                    className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-white text-sm font-medium mb-2">Project Details</label>
                            <textarea
                                placeholder="Tell us about your project requirements, goals, and timeline..."
                                rows="5"
                                className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black py-4 px-8 rounded-xl font-switzer font-semibold text-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Start Your Project
                        </button>

                        <p className="text-center text-gray-400 text-sm mt-6">
                            We&apos;ll respond within 24 hours to discuss your project.
                        </p>
                    </form>
                </div>
            </div>

            {/* Bottom Section - Additional Info */}

        </footer>
    )
}

export default Form