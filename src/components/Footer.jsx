// import React from 'react'
import {
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa'

import  LogoCoacen  from '../assets/img/logo-cooperativa-3.png';
import { NavLink } from 'react-router-dom';

export function Footer() {
    return (
        <div className='max-w-[1530px] mx-auto mt-[40px] py-16 px-28 grid lg:grid cols-3 gap-8 text-gray-300'>
            <div>
                <div className='flex gap-2'>
                    <img src={LogoCoacen} className='w-10' alt="" />
                    <h1 className='w-full text-3xl font-bold text-[#00df98b0]'>COACEN</h1>
                </div>
                <p className='py-2'>
                    Endereço: MT-242, Loteamento Valo, 840. Sorriso - MT.
                </p>
                <div className='flex md:w-[75%] my-2'>
                    <NavLink to='https://www.instagram.com/cooperativacoacen/' target='_blank'>
                        <FaInstagram className='text-3xl mr-2' />
                    </NavLink>
                    <NavLink to='https://www.linkedin.com/company/coacen/mycompany/' target='_blank'>
                        <FaLinkedin className='text-3xl' />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

