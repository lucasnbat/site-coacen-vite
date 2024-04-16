// import React from 'react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import  LogoCoacen  from '../assets/img/logo-cooperativa-3.png';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const handleMenuClick = () => {
        setNav(false);
    };

    return (
        <div className='flex justify-between items-center text-white h-24 max-w-[1530px] mx-auto px-20'>
            <div className='flex gap-2'>
                <NavLink to="/" className="flex gap-2">
                    <img src={LogoCoacen} className='w-10' alt="" />
                    <h1 className='w-full text-3xl font-bold text-[#0a7a56]'>COACEN</h1>
                </NavLink>
            </div>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:font-medium cursor-pointer'><NavLink to="/">Home</NavLink></li>
                <li className='p-4 hover:font-medium cursor-pointer'><NavLink to="/contact">Contato</NavLink></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-200'}>
                <h1 className='w-full text-3xl font-bold text-[#0a7a56b0] m-4'>COACEN</h1>
                <ul className=' uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'><NavLink to="/" onClick={handleMenuClick}>Home</NavLink></li>
                    <li className='p-4 border-b border-gray-600'><NavLink to="/contact" onClick={handleMenuClick}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}