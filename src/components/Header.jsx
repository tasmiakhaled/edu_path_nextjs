import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/header.module.css'; 

const Header = () => {
    return (
        <div className='bg-base-100'>
            <div className={styles['header-container']}>
                <div className="navbar">
                    {/* Left section with the logo */}
                    <div className="navbar-start">
                        <Link href={'/'} className='font-semibold text-2xl'>Logo</Link>
                    </div>

                    {/* Center section with navigation menu on large screens */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <details>
                                    <summary className='font-semibold'>Courses</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary className='font-semibold'>Instructors</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary className='font-semibold'>Blogs</summary>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li className='font-semibold'><a>About</a></li>
                            <li className='font-semibold'><a>Contact</a></li>
                        </ul>
                    </div>

                    {/* Hamburger Menu for Small Screens */}
                    <div className="navbar-end lg:hidden flex items-center gap-4">
                        <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                    </div>

                    {/* Right section with cart icon and login button */}
                    <div className="navbar-end flex items-center gap-4">
                        <Image alt='Cart Icon' src="/Vector.png" height={32} width={32} />
                        <a className="btn btn-primary rounded-full text-white">Login</a>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <div className="drawer lg:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Content goes here */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-100 text-base-content">
                        <li>
                            <details>
                                <summary className='font-semibold'>Courses</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className='font-semibold'>Instructors</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className='font-semibold'>Blogs</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className='font-semibold'><a>About</a></li>
                        <li className='font-semibold'><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;