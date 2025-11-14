import React from 'react'

const Blogs = () => {
    return (
        <div className="bg-black  text-white py-16 px-8">
            {/* Featured Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-4">
                    Featured
                </h2>
                <div className="w-8 h-0.5 bg-gray-500 mx-auto"></div>
            </div>

            {/* Content Card */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-backvox rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
                            Voxels
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            One of the goals of creating One Voxel is to provide students
                            &ldquo;like us&rdquo; with ways to learn and how to learn, meanwhile we are
                            providing them with tutorials about everything so they don&apos;t
                            suffer like we did.
                        </p>
                        <a
                            href="https://onevoxel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border font-switzer border-voxel text-gray-300 px-6 py-3 rounded-lg hover:bg-voxel hover:text-backvox hover:border-gray-400 transition-all duration-300"
                        >
                            Visit the Website
                        </a>
                    </div>

                    {/* Right Icon */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            {/* 3D Voxel Icon */}
                            <div className="w-48 h-48 md:w-64 md:h-64">
                                <svg
                                    viewBox="0 0 200 200"
                                    className="w-full h-full"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Voxel Shape */}
                                    <g transform="translate(50, 30)">
                                        {/* Top face */}
                                        <path
                                            d="M50 40 L100 20 L100 80 L50 100 Z"
                                            fill="#e5e5e5"
                                            stroke="#d1d5db"
                                            strokeWidth="2"
                                        />
                                        {/* Left face */}
                                        <path
                                            d="M0 60 L50 40 L50 100 L0 120 Z"
                                            fill="#d1d5db"
                                            stroke="#9ca3af"
                                            strokeWidth="2"
                                        />
                                        {/* Right face */}
                                        <path
                                            d="M50 40 L100 20 L100 80 L50 100 Z"
                                            fill="#f3f4f6"
                                            stroke="#e5e7eb"
                                            strokeWidth="2"
                                        />
                                        {/* Inner cross - vertical */}
                                        <rect
                                            x="45"
                                            y="45"
                                            width="10"
                                            height="50"
                                            fill="#6b7280"
                                        />
                                        {/* Inner cross - horizontal */}
                                        <rect
                                            x="30"
                                            y="65"
                                            width="40"
                                            height="10"
                                            fill="#6b7280"
                                        />
                                    </g>

                                    {/* Handle on top */}
                                    <ellipse
                                        cx="100"
                                        cy="35"
                                        rx="15"
                                        ry="8"
                                        fill="#9ca3af"
                                        stroke="#6b7280"
                                        strokeWidth="2"
                                    />
                                    <rect
                                        x="85"
                                        y="25"
                                        width="30"
                                        height="8"
                                        rx="4"
                                        fill="#9ca3af"
                                        stroke="#6b7280"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs