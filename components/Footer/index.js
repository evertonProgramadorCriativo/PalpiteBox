import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container  mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Everton Eduardo / Linkedin / Github
           
                <div className='mt-2'>
                    <img src="/logo_devpleno.png" className="p-4 inline" alt='logoDev' />
                    <img src="/logo_semana_fsm.png" className="p-4 inline" alt='logoSemanaFsm' />
                </div>
            </div>
        </div>
    )
}

export default Footer