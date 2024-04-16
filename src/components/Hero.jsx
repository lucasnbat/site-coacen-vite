// import React from 'react'
import { ReactTyped } from 'react-typed';
import { animateScroll as scroll } from 'react-scroll';

export function Hero() {

    const scrollToStory = () => {
        scroll.scrollTo(700, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className='bg-white mx-10 rounded-lg shadow-md p-6 bg-opacity-70 max-w-[780px] flex flex-col justify-center items-center'>
                    <h1 className='md:text-7xl sm:text-6xl  text-4xl font-bold md:py-6  text-[#0a7a56]'>COACEN</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4 text-[#0a7a56]'>
                            Unidos para
                        </p>
                        <ReactTyped className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-3 pl-1 text-[#0a7a56]"
                            strings={['produzir', 'cooperar', 'avançar']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>

                    <button
                        onClick={scrollToStory}
                        className='bg-[#0a7a56] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#095039] transition ease-in-out'>
                        Conheça nossa história
                    </button>
                </div>
            </div>
        </div>
    )
}
