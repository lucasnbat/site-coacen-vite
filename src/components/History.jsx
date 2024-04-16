// import React from 'react';
import FazendaSoja from '../assets/img/fazenda-soja.jpg'

export function History() {
    return (
        <div className='w-full bg-white py-12 px-4 border-b border-gray-200'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[800px] mx-auto my-4 rounded-md' src={FazendaSoja} alt="/" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold mb-2'>O início</h1>
                    <div className='flex flex-col gap-2'>
                        <p>A Cooperativa Agropecuária do Norte do Mato Grosso (COACEN) é uma
                            organização cooperativa que desempenha um papel crucial no setor
                            agropecuário da região. Fundada com o propósito de promover o
                            desenvolvimento econômico e social dos agricultores e pecuaristas
                            locais, a COACEN oferece uma variedade de serviços e recursos
                            para seus membros, incluindo assistência técnica, acesso a
                            insumos agrícolas, comercialização de produtos agrícolas e
                            pecuários, além de programas de capacitação e treinamento.
                        </p>
                        <p>Ao unir forças em uma cooperativa, os agricultores e pecuaristas
                            da região podem se beneficiar de economias de escala, maior poder
                            de negociação e cooperação mútua para superar desafios comuns.
                            A COACEN desempenha um papel vital na promoção da sustentabilidade
                            ambiental, na melhoria da qualidade de vida das comunidades rurais
                            e no impulsionamento da economia local.
                        </p>
                        <p>Com uma história de comprometimento com a excelência, a COACEN continua
                            a ser uma força motriz na transformação positiva do setor agropecuário
                            do Norte do Mato Grosso, promovendo o crescimento, a inovação e a
                            prosperidade para seus membros e a região como um todo.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}