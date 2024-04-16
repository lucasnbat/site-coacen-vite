// import React from 'react';

export function Institutional(){
    return (
        <div className='w-full bg-white py-12 px-4 flex justify-center items-center'>
            <div className='max-w-[914px] flex flex-col justify-between items-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold mb-4'>Institucional</h1>
                <iframe
                    width="700"
                    height="412"
                    src="https://www.youtube.com/embed/eIB1rA2k4IA"
                    title="Institucional 2020 Português"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className='rounded-md md:w-[750px] w-full h-[450px]'
                />
            </div>
        </div>
    );
}