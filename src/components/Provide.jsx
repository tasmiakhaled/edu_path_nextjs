import Image from 'next/image';
import React from 'react';

const Provide = () => {
    return (
        <div className="bg-white lg:mt-10 sm:mt-[1000px]">
            <div className="container mx-auto w-[1000px] h-[660px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col items-start">
                        <p className='text-3xl font-bold'>We provide</p>
                        <div className="flex items-center mt-10">
                            <Image alt="Tick Mark" src="/tickGray.png" height={25} width={25} />
                            <p className='text-xl ml-8 text-gray-700'>Perosnalized routine</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <Image alt="Tick Mark" src="/tickGray.png" height={25} width={25} />
                            <p className='text-xl ml-8 text-gray-700'>Follow-up after completing courses</p>
                        </div>
                        <div className='w-[424px] h-[154px] border-y-[2px] border-base-300 mt-10'>
                            <div className="flex items-center mt-2">
                                <Image alt="Tick Mark" src="/tickPurple.png" height={32} width={32} />
                                <p className='text-xl ml-6 font-semibold'>Access to additional resources</p>
                            </div>
                            <p className='text-[rgba(0, 0, 0, 0.7)] ml-14 mt-1 text-[15px]'>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                        </div>
                        <div className="flex items-center mt-6">
                            <Image alt="Tick Mark" src="/tickGray.png" height={25} width={25} />
                            <p className='text-xl ml-8 text-gray-700'>Free community support</p>
                        </div>
                        <div className="mt-14 flex items-center">
                            <button className="btn text-xs text-primary bg-white outline outline-primary rounded-full sm:mb-4">
                                Learn More About Our Services
                            </button>
                        </div>
                    </div>
                    <div className='relative lg:ml-0 sm:ml-4'>
                        <Image alt='Mask' src="/Mask2.png" height={600} width={585} />
                        <Image
                            alt='Frame'
                            src="/Frame2.png"
                            height={74}
                            width={74}
                            className="absolute top-10 left-[-30px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Provide;