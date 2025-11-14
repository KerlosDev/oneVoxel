'use client';
import React from 'react'

const Content = () => {
    return (
        <div className="relative bg-black min-h-screens pb-10  px-6">
            <div className="max-w-6xl mx-auto">
                {/* Bento Grid Layout - 2x2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">

                    {/* Top Left - From UI/UX to Production */}
                    <div className="bg-gradient-to-br from-voxgred to-black/50 rounded-2xl p-8 border border-white/5 flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                From UI/UX to Production
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We as One Voxel handle every technical matter for you,
                                you just make your call and forget about everything.
                            </p>
                        </div>

                        <div className="bg-black/50 rounded-xl p-6 border border-white/5 mt-auto">
                            {/* 3D Building Icon */}
                            <div className="w-24 h-24 mx-auto flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-16 h-20 bg-gradient-to-b from-voxel to-gray-600 rounded-t-lg transform perspective-1000 rotateX-12">
                                        <div className="w-full h-2 bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-lg"></div>
                                        <div className="w-6 h-6 bg-voxgred absolute top-4 left-5 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Top Right - You're Guaranteed to Grow */}
                    <div className="bg-gradient-to-br from-voxgred to-black/50 rounded-2xl p-8 border border-white/5 flex flex-col row-span-2">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                You&apos;re Guaranteed to Grow
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We don&apos;t waste your time, here at One Voxel we consider
                                every second is the last so there&apos;s no time for trying or
                                mistakes, we get the job done in time with real effect on
                                you business whatever it is.
                            </p>
                        </div>

                        <div className="bg-black/50 rounded-xl p-6 border border-white/5 mt-auto">
                            {/* Growth Chart */}
                            <div className="w-full h-48 relative">
                                <svg className="w-full h-full" viewBox="0 0 300 180" preserveAspectRatio="none">
                                    {/* Background grid lines */}
                                    <defs>
                                        <pattern id="grid" width="30" height="18" patternUnits="userSpaceOnUse">
                                            <path d="M 30 0 L 0 0 0 18" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />

                                    {/* Growth curves */}
                                    <path
                                        d="M 20 160 Q 80 140 150 100 Q 220 60 280 30"
                                        fill="none"
                                        stroke="rgba(167,167,167,0.3)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                    />
                                    <path
                                        d="M 20 170 Q 80 150 150 110 Q 220 70 280 35"
                                        fill="none"
                                        stroke="rgba(167,167,167,0.5)"
                                        strokeWidth="3"
                                    />
                                    <path
                                        d="M 20 165 L 50 145 L 80 120 L 110 95 L 140 70 L 170 50 L 200 40 L 230 35 L 260 32 L 280 30"
                                        fill="none"
                                        stroke="#A7A7A7"
                                        strokeWidth="3"
                                    />

                                    {/* Data points */}
                                    <circle cx="50" cy="145" r="3" fill="#A7A7A7" />
                                    <circle cx="110" cy="95" r="3" fill="#A7A7A7" />
                                    <circle cx="170" cy="50" r="3" fill="#A7A7A7" />
                                    <circle cx="230" cy="35" r="3" fill="#A7A7A7" />
                                    <circle cx="280" cy="30" r="4" fill="#A7A7A7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Left - Misleading stuff? */}
                    <div className="bg-gradient-to-br from-voxgred to-black/50 rounded-2xl p-8 border border-white/5 flex flex-col">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Misleading stuff?
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We don&apos;t sell you Air in Bags, we see what you need ONLY
                                and do it for you without adding unnecessary stuff.
                            </p>
                        </div>

                        <div className="bg-black/50 rounded-xl p-6 border border-white/5 mt-auto">
                            {/* Abstract symbols */}
                            <div className="w-full h-20 flex items-center justify-center">
                                <div className="flex items-center space-x-4 text-gray-500">
                                    <span className="text-3xl transform rotate-12">%</span>
                                    <span className="text-2xl transform -rotate-45">|</span>
                                    <span className="text-3xl transform rotate-90">★</span>
                                    <span className="text-2xl transform rotate-12">$</span>
                                    <span className="text-3xl transform -rotate-12">£</span>
                                    <span className="text-2xl">€</span>
                                    <span className="text-3xl transform rotate-45">!</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content