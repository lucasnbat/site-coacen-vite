// import React from 'react'

export function ContactComponent() {
     return (
          <div className='p-5 h-screen bg-gray-100'>
               <h1 className='text-xl mb-2 text-black font-bold'>Contato</h1>
               <div className='overflow-auto rounded-lg shadow'>
                    <table className='w-full'>
                         <thead className='bg-gray-50 border-b-2 border-gray-200'>
                              <tr>
                                   <th className='p-3 text-sm font-semibold tracking-wide text-left'>Setor</th>
                                   <th className='p-3 text-sm font-semibold tracking-wide text-left'>E-mail</th>
                                   <th className='p-3 text-sm font-semibold tracking-wide text-left'>Ramais (3907-)</th>
                                   <th className='p-3 text-sm font-semibold tracking-wide text-left'>WhatsApp</th>
                              </tr>
                         </thead>
                         <tbody className='divide-y divide-gray-100'>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm font-bold text-green-600 whitespace-nowrap'>Recepção</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:recepcao@coacen.com.br" className='hover:underline' >
                                             recepcao@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6400, 6401</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/5566996345973"
                                             target='_blank'
                                             rel='noreferrer'
                                             className='hover:underline'>
                                             66 99634-5973
                                        </a>
                                   </td>
                              </tr>
                              <tr className='bg-gray-100'>
                                   <td className='p-3 text-sm font-bold text-green-600 whitespace-nowrap'>Comercial Químicos</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6402, 6403</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                              </tr>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm font-bold text-green-600 whitespace-nowrap'>Faturamento químico</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:suprimentos@coacen.com.br" className='hover:underline'>
                                             suprimentos@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6404, 6405, 6406</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="https://wa.me/5566996376432"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99637-6432
                                        </a>
                                   </td>

                              </tr>
                              <tr className='bg-gray-100'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Contratos</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:contratos@coacen.com.br" className='hover:underline'>
                                             contratos@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6407</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/66996180102"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99618-0102
                                        </a>
                                   </td>

                              </tr>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Logística</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:logistica@coacen.com.br" className='hover:underline'>
                                             logistica@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6408</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/66999420042"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99942-0042
                                        </a>
                                   </td>
                              </tr>
                              <tr className='bg-gray-100'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Comercial Grãos</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6408</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                              </tr>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Faturamento Grãos</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:faturamentograos@coacen.com.br" className='hover:underline'>
                                             faturamentograos@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6411, 6412, 6432</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/66999851927"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99985-1927
                                        </a>
                                   </td>
                              </tr>
                              <tr className='bg-gray-100'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Financeiro</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:financeiro@coacen.com.br" className='hover:underline'>
                                             financeiro@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6413</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/66996310880"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99631-0880
                                        </a>
                                   </td>
                              </tr>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>TI</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:robison.meinerz@coacen.com.br" className='hover:underline'>
                                             robison.meinerz@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6415</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                              </tr>
                              <tr className='bg-gray-100'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Diretoria</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:diretoria@coacen.com.br" className='hover:underline'>
                                             diretoria@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6416</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                              </tr>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Administrativo</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:administrativo01@coacen.com.br" className='hover:underline'>
                                             administrativo01@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6417</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                              </tr>
                              <tr className='bg-gray-100'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Contabilidade</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a href="mailto:contabilidade@coacen.com.br" className='hover:underline'>
                                             contabilidade@coacen.com.br
                                        </a>
                                   </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6418, 6419</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/66996594913"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99659-4913
                                        </a>
                                   </td>
                              </tr>
                              <tr className='bg-white'>
                                   <td className='p-3 text-sm  font-bold text-green-600 whitespace-nowrap'>Transportadora</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> - </td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>6414</td>
                                   <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <a
                                             href="https://wa.me/66999443642"
                                             target='_blank'
                                             rel="noreferrer"
                                             className='hover:underline'>
                                             66 99944-3642
                                        </a>
                                   </td>
                              </tr>
                         </tbody>
                    </table>
               </div>

          </div>
     )
}