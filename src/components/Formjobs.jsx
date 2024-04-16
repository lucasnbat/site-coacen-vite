// import React from 'react'

export function Formjobs() {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Interessado em unir forças conosco? Envie seu currículo!
                    </h1>
                    <p>Em breve entraremos em contato</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            type="email"
                            placeholder='digite seu email'
                            className='p-3 flex w-full rounded-md text-black'
                        />
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 ml-4 text-black'>
                            Enviar
                        </button>
                    </div>
                    <p>Nós nos preocupamos com a proteção dos seus dados. Leia nossa <span className='text-[#00df9a]'>política de privacidade</span> .</p>
                </div>
            </div>
        </div>
    )
}