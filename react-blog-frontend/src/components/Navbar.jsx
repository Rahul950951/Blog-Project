import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/blogs", link: "Blogs" },
        { path: "/about", link: "About" },
        { path: "/contact", link: "Contact" },
    ];

    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0 z-50'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>RK</span></a>

                {/* Nav items for larger screens */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {navItems.map(({ path, link }) => (
                        <li className='text-white' key={path}>
                            <NavLink 
                                className={({ isActive }) => isActive ? "active" : ""}
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Social icons and login button for larger screens */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href="/" className='hover:text-orange-500'><FaFacebook /></a>
                    <a href="/" className='hover:text-orange-500'><FaDribbble /></a>
                    <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
                    <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
                </div>

                {/* Modal component */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 bg-white ${isMenuOpen ? "fixed top-16 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {navItems.map(({ path, link }) => (
                    <li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Navbar;
