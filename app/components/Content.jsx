'use client';
import React from 'react'
import CurverLoop from './ui/CurverLoop'
import LightRays from './ui/LightRays';
import Image from 'next/image';
import BlurText from './ui/BlurText';

const Content = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div>




            <div className="relative">

                <div className="relative z-10">

                    <div className=" py-24 sm:py-32">
                        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

                            <div className="flex justify-center w-full">
                                <BlurText
                                    text="What we Offer !?"
                                    delay={150}
                                    animateBy="words"
                                    direction="top"
                                    onAnimationComplete={handleAnimationComplete}
                                    className="text-center text-base/7 font-semibold text-indigo-400 mx-auto">
                                </BlurText>
                            </div>

                            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                                Professional Web Development Solutions
                            </p>
                            <div className="mt-10  font-bold grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                                <div className="relative lg:row-span-2">
                                    <div className="absolute inset-px rounded-lg bg-black/20 backdrop-blur-xl lg:rounded-l-4xl" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] bg-white/10 backdrop-blur-md border border-white/20">
                                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                            <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">Responsive Design</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                                Our websites are fully responsive and mobile-optimized, ensuring perfect functionality across all devices and screen sizes.
                                            </p>
                                        </div>
                                        <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                            <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                                                <Image
                                                    width={500}
                                                    height={300}
                                                    alt=""
                                                    src='/screen.png'
                                                    className="size-full  object-cover object-top"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
                                </div>
                                <div className="relative max-lg:row-start-1">
                                    <div className="absolute inset-px rounded-lg bg-black/20 backdrop-blur-xl max-lg:rounded-t-4xl" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-white/10 backdrop-blur-md border border-white/20">
                                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                            <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">High Performance</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                                Lightning-fast loading times with optimized code, image compression, and advanced caching strategies for superior user experience.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 items-center justify-center  px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                            <Image
                                                width={500}
                                                height={300}
                                                alt=""
                                                src="/dark-bento-03-performance.png"
                                                className="w-full  max-lg:max-w-xs"
                                            />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
                                </div>
                                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                    <div className="absolute inset-px rounded-lg bg-black/20 backdrop-blur-xl" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-white/10 backdrop-blur-md border border-white/20">
                                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                            <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">Enterprise Security</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                                Bank-level security with SSL encryption, secure authentication, and regular security audits to protect your data and users.
                                            </p>
                                        </div>
                                        <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                            <Image
                                                alt=""
                                                height={300}

                                                width={500}
                                                src="/dark-bento-03-security.png"
                                                className="h-[min(152px,40cqw)] object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
                                </div>
                                <div className="relative lg:row-span-2">
                                    <div className="absolute inset-px rounded-lg bg-black/20 backdrop-blur-xl max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] bg-white/10 backdrop-blur-md border border-white/20">
                                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                            <p className="mt-2 text-lg font-bold tracking-tight text-white max-lg:text-center">RESTful APIs</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                                                Robust backend infrastructure with scalable APIs, real-time data processing, and seamless third-party integrations.
                                            </p>
                                        </div>
                                        <div className="relative min-h-120 w-full grow">
                                            <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                                                <div className="flex bg-gray-900 outline outline-white/5">
                                                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white cursor-pointer">
                                                            server.js
                                                        </div>
                                                        <div className="border-r border-gray-600/10 px-4 py-2 cursor-pointer hover:text-white">routes.js</div>
                                                    </div>
                                                </div>
                                                <div className="px-6 pt-6 pb-14">
                                                    <div className="space-y-4 font-mono text-sm text-gray-300">
                                                        <p><span className="text-gray-500">{`// Express.js API server`}</span></p>
                                                        <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">express</span> = <span className="text-[#61afef]">require</span>(<span className="text-[#98c379]">&apos;express&apos;</span>);</p>
                                                        <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">cors</span> = <span className="text-[#61afef]">require</span>(<span className="text-[#98c379]">&apos;cors&apos;</span>);</p>
                                                        <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">helmet</span> = <span className="text-[#61afef]">require</span>(<span className="text-[#98c379]">&apos;helmet&apos;</span>);</p>
                                                        <br />
                                                        <p><span className="text-[#c678dd]">const</span> app = <span className="text-[#61afef]">express</span>();</p>
                                                        <p>app.<span className="text-[#61afef]">use</span>(<span className="text-[#61afef]">helmet</span>());</p>
                                                        <p>app.<span className="text-[#61afef]">use</span>(<span className="text-[#61afef]">cors</span>());</p>
                                                        <p>app.<span className="text-[#61afef]">use</span>(express.<span className="text-[#61afef]">json</span>());</p>
                                                        <br />
                                                        <p><span className="text-gray-500">{`// API endpoint for user data`}</span></p>
                                                        <p>app.<span className="text-[#e5c07b]">get</span>(<span className="text-[#98c379]">&apos;/api/users&apos;</span>, <span className="text-[#c678dd]">async</span> (req, res) =&gt; {`{`}</p>
                                                        <p className="ml-4"><span className="text-[#c678dd]">try</span> {`{`}</p>
                                                        <p className="ml-8"><span className="text-[#c678dd]">const</span> users = <span className="text-[#c678dd]">await</span> User.<span className="text-[#61afef]">findAll</span>();</p>
                                                        <p className="ml-8">res.<span className="text-[#61afef]">json</span>({`{ success: true, data: users }`});</p>
                                                        <p className="ml-4">{`} catch (error) {`}</p>
                                                        <p className="ml-8">res.<span className="text-[#61afef]">status</span>(<span className="text-[#d19a66]">500</span>).<span className="text-[#61afef]">json</span>({`{ error }`});</p>
                                                        <p className="ml-4">{`}`}</p>
                                                        <p>{`});`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="absolute inset-0 z-0">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays"
                    />
                </div>
            </div>
           
        </div>
    )
}

export default Content