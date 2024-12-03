import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-gray-100 lg:mt-0 sm:mt-[500px]'>
            <div className='mx-auto max-w-screen-lg'>
                <footer className="footer text-base-content p-10">
                    <nav>
                        <p className='text-[rgba(0,0,0,0.5)] font-medium mb-4'>Categories</p>
                        <a className="link link-hover mb-1">Nutrition and diet</a>
                        <a className="link link-hover mb-1">Fitness training</a>
                        <a className="link link-hover mb-1">Mindfulness</a>
                        <a className="link link-hover mb-1">Mental health</a>
                        <a className="link link-hover mb-1">Personal growth</a>
                        <a className="link link-hover mb-1">Social wellbeing</a>
                    </nav>
                    <nav>
                        <p className='text-[rgba(0,0,0,0.5)] font-medium mb-4'>About</p>
                        <a className="link link-hover mb-1">About us</a>
                        <a className="link link-hover mb-1">Our partners</a>
                        <a className="link link-hover mb-1">Investors</a>
                        <a className="link link-hover mb-1">Career</a>
                    </nav>
                    <nav>
                        <p className='text-[rgba(0,0,0,0.5)] font-medium mb-4'>Resources</p>
                        <a className="link link-hover mb-1">FAQ</a>
                        <a className="link link-hover mb-1">Refund policies</a>
                        <a className="link link-hover mb-1">Terms and conditions</a>
                        <a className="link link-hover mb-1">Cookie</a>
                        <a className="link link-hover mb-1">Latest posts</a>
                    </nav>
                    <nav>
                        <p className='text-[rgba(0,0,0,0.5)] font-medium mb-4'>Support</p>
                        <a className="link link-hover mb-1">Get in touch</a>
                        <a className="link link-hover mb-1">Visit our forum</a>
                    </nav>
                </footer>
                <footer className="footer text-base-content border-base-300 border-dashed border-t px-10 py-4">
                    <aside className="grid-flow-col items-center font-semibold text-xl">
                        <p>Join our official channels</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <Image alt='Instagram Icon' src="/instagram.png" height={26} width={26} />
                            </a>
                            <a>
                                <Image alt='Twitter Icon' src="/twitter.png" height={26} width={26} />
                            </a>
                            <a>
                                <Image alt='Facebook Icon' src="/facebook.png" height={26} width={26} />
                            </a>
                            <a>
                                <Image alt='Discord Icon' src="/discord.png" height={32} width={32} />
                            </a>
                        </div>
                    </nav>
                </footer>
                <footer className="footer border-base-300 border-dashed border-t text-base-content p-4">
                    <aside>
                        <p className='text-[rgba(0,0,0,0.5)] font-medium text-xs mt-4'>© {new Date().getFullYear()} EduPath. All rights reserved</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;