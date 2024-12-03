import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[rgba(240,241,238,1)]">
            <div className="container mx-auto w-[1000px] h-[588px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col items-start justify-center sm:mb-4">
                        <div className="flex items-center">
                            <Image alt="Rating Icon" src="/rating.png" height={24} width={120} />
                            <h6 className="ml-2">4.9(566)</h6>
                        </div>
                        <h1 className="mt-2 text-4xl font-bold">
                            #1 Platform <br />
                            Powering Health <br />
                            and Wellness
                        </h1>
                        <p className="mt-12 text-xl font-semibold">
                            We&apos;re restoring home as the primary <br />
                            place of personal well-being
                        </p>
                        <p className="text-[rgba(0,0,0,0.7)] mt-6 font-normal">
                            Health is not just about what you&apos;re eating. It&apos;s also <br />
                            about what you&apos;re thinking and saying
                        </p>
                        <div className="mt-6 flex items-center">
                            <button className="btn btn-primary text-xs text-white rounded-full mr-3">
                                Browse Courses
                            </button>
                            <button className="btn text-xs text-primary bg-[rgba(240,241,238,1)] outline outline-primary rounded-full">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="relative lg:ml-0 sm:ml-4">
                        <Image alt="Mask" src="/banner.png" height={760} width={648} />
                        <Image
                            alt="Frame"
                            src="/Frame.png"
                            height={74}
                            width={74}
                            className="absolute top-10 left-[-30px]"
                        />
                        <div className="absolute bottom-0 left-0 w-[500px] rounded-b-lg shadow-md border-none border-gray-300 p-4">
                            <div className="bg-[rgba(255,255,255,0.7)] rounded-lg border border-gray-400 shadow-md">
                                <div className="flex items-center mb-4 p-2">
                                    <h3 className="text-4xl font-bold mr-4">12,000+</h3>
                                    <Image
                                        alt="Line"
                                        src="/Line.png"
                                        height={2}
                                        width={1}
                                        className="h-10 w-[1px]"
                                    />
                                    <p className="text-xl ml-4 font-semibold">
                                        Happy learners rely on <br /> us regularly
                                    </p>
                                </div>
                                <div className="mt-4 p-6 bg-white/60 backdrop-blur-lg rounded-lg border-none shadow-md flex items-center justify-around">
                                    <p className="font-semibold text-xs flex-shrink-0 mr-4">
                                        Find your wellbeing
                                    </p>
                                    <p className="text-xs">
                                        By prioritizing self-care and making informed choices, <br />
                                        one can enhance their overall quality of life
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;