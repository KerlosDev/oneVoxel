import React from 'react'

const Devices = () => {
    return (
        <div className="bg-black text-white py-16 px-8">
            <div className="max-w-6xl mx-auto text-center">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-switzer mb-4 tracking-wide">
                    THE ULTIMATE PLAN
                </h1>
                <p className="text-gray-400 text-lg mb-16 font-switzer max-w-4xl mx-auto">
                    The perfect choice for people who wants to go all in with cross-platform ecosystem the covers all types of users
                </p>

                {/* Devices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Web Application */}
                    <div className="bg-voxgred rounded-lg p-6 space-y-4">
                        <h3 className="text-xl font-switzer text-gray-300">Web Application</h3>
                        <p className="text-gray-500 text-sm">
                            Call out a feature, benefit, or value that can stand on its own.
                        </p>
                        <div className="flex justify-center pt-8">
                            <div className="w-48 h-32 bg-gray-600 rounded-2xl border-4 border-white flex items-center justify-center">
                                <div className="w-40 h-24 bg-gray-500 rounded-lg"></div>
                            </div>
                        </div>
                    </div>

                    {/* Android Application */}
                    <div className="bg-voxgred rounded-lg p-6 space-y-4">
                        <h3 className="text-xl font-switzer text-gray-300">Android Application</h3>
                        <p className="text-gray-500 text-sm">
                            Call out a feature, benefit, or value that can stand on its own.
                        </p>
                        <div className="flex justify-center pt-8">
                            <div className="w-32 h-48 bg-gray-600 rounded-2xl border-4 border-white flex items-center justify-center">
                                <div className="w-24 h-40 bg-gray-500 rounded-lg"></div>
                            </div>
                        </div>
                    </div>

                    {/* iOS Application */}
                    <div className="bg-voxgred rounded-lg p-6 space-y-4">
                        <h3 className="text-xl font-switzer text-gray-300">iOS Application</h3>
                        <p className="text-gray-500 text-sm">
                            Call out a feature, benefit, or value that can stand on its own.
                        </p>
                        <div className="flex justify-center pt-8">
                            <div className="w-32 h-48 bg-gray-600 rounded-2xl border-4 border-white flex items-center justify-center">
                                <div className="w-24 h-40 bg-gray-500 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devices