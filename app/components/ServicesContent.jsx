import React from 'react'
import { IoCubeSharp } from 'react-icons/io5'

const ServicesContent = () => {
    return (
        <div className="bg-black text-voxel min-h-screen flex items-center justify-center px-8 py-16">

            <div className=' grid grid-cols-1'>
                {/* Web Apps Section */}
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-24">
                    {/* Left Column - Web Apps */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-14 h-14 bg-voxgred rounded-xl flex items-center justify-center shrink-0">
                                <IoCubeSharp className="w-7 h-7 text-voxel" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Web Apps</h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg mb-12 max-w-lg">
                            With Web Apps you can do whatever you want from a system for your company or business to just being a portfolio for you. One of the main points that make people choose Web Apps is the wide audience that you can reach as the Web Apps are cross-platform but the main weakness is not everything is suitable for mobile devices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-voxel hover:bg-gray-500 text-black font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                                Request a Project
                            </button>
                            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:bg-gray-800/20">
                                See Plans
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 lg:pt-8">
                        {/* Specific UI for you */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-4 h-4 bg-voxel rounded-full shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">Specific UI for you</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Custom user interfaces designed specifically for your brand and user needs, ensuring optimal user experience and engagement.
                            </p>
                        </div>

                        {/* Well Structured Backend */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-4 h-4 bg-voxel transform rotate-45 shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">Well Structured Backend</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Robust and scalable backend architecture with secure APIs, efficient database design, and optimal performance optimization.
                            </p>
                        </div>

                        {/* Perfect Support */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-voxel shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">Perfect Support</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Comprehensive support including maintenance, updates, bug fixes, and feature enhancements to keep your web app running smoothly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Apps Section */}
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-24">
                    {/* Left Column - Mobile Apps */}

                    <div className="space-y-6 lg:pt-8">
                        {/* Native Experience */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-4 h-4 bg-voxel rounded-full shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">Native Experience</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Platform-specific development ensuring optimal performance and user experience that feels natural on each device.
                            </p>
                        </div>

                        {/* Device Integration */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-4 h-4 bg-voxel transform rotate-45 shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">Device Integration</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Access to camera, GPS, push notifications, and other device features for rich, interactive experiences.
                            </p>
                        </div>

                        {/* App Store Ready */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-voxel shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">App Store Ready</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Complete development and deployment support for both iOS App Store and Google Play Store distribution.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-14 h-14 bg-voxgred rounded-xl flex items-center justify-center shrink-0">
                                <IoCubeSharp className="w-7 h-7 text-voxel" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Mobile Apps</h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg mb-12 max-w-lg">
                            Mobile applications put your business in users&apos; pockets. With native iOS and Android development, we create intuitive, fast, and engaging mobile experiences that leverage device capabilities and provide seamless user interactions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-voxel hover:bg-gray-500 text-black font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                                Request a Project
                            </button>
                            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:bg-gray-800/20">
                                See Plans
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Apps Section */}
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mt-24">
                    {/* Left Column - Desktop Apps */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="w-14 h-14 bg-voxgred rounded-xl flex items-center justify-center shrink-0">
                                <IoCubeSharp className="w-7 h-7 text-voxel" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Desktop Apps</h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg mb-12 max-w-lg">
                            Desktop applications offer powerful performance and full system access. Perfect for complex business software, creative tools, and applications requiring high computational power. They provide the best user experience for professional workflows and resource-intensive tasks.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-voxel hover:bg-gray-500 text-black font-medium px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
                                Request a Project
                            </button>
                            <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:bg-gray-800/20">
                                See Plans
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 lg:pt-8">
                        {/* High Performance */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-4 h-4 bg-voxel rounded-full shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">High Performance</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Native desktop applications leverage full system resources for optimal performance and speed, perfect for demanding computational tasks.
                            </p>
                        </div>

                        {/* System Integration */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-4 h-4 bg-voxel transform rotate-45 shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">System Integration</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Deep integration with operating system features, file systems, and hardware components for comprehensive functionality.
                            </p>
                        </div>

                        {/* Offline Capabilities */}
                        <div className="bg-voxgred p-6 rounded-xl">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-voxel shrink-0 mt-2"></div>
                                <h3 className="text-xl lg:text-2xl font-semibold text-voxel">Offline Capabilities</h3>
                            </div>
                            <p className="text-voxel leading-relaxed max-w-md ml-8">
                                Full functionality without internet dependency, ensuring productivity and reliability in any environment.
                            </p>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ServicesContent