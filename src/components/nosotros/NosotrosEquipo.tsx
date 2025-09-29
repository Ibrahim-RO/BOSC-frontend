import React from 'react'
import imgArticulo from '../../assets/Inicio/Bosc_001.webp'

const NosotrosEquipo = () => {
    return (
        <div className='bg-negro flex items-center justify-center px-4 sm:px-8 lg:px-30 py-8 md:py-0'>
            <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-7xl'>
                {/* Contenedor principal de contenido izquierdo */}
                <div className='flex flex-col items-center md:items-start justify-center w-full md:w-[50%] text-center md:text-left mb-6 md:mb-0'>
                    <div className='space-y-4 md:space-y-2 w-full max-w-2xl'>
                        <h2 className='text-2xl sm:text-3xl md:text-[1.8rem] lg:text-[2.2rem] font-bold text-cafeBosc leading-tight'>
                            Nuestro <span className='text-white'>Equipo</span>
                        </h2>
                        <p className='text-base sm:text-lg md:text-[0.8rem] lg:text-[1.1rem] text-white leading-relaxed'>
                            Estamos conformados por un grupo de profesionales con 
                            <span className="hidden sm:inline"><br /></span>
                            <span className="sm:hidden"> </span>
                            experiencia en diferentes industrias
                        </p>
                    </div>
                </div>

                <div className='flex-1 flex justify-center md:justify-end w-full md:w-auto'>
                    <img
                        src={imgArticulo}
                        alt="Icono de BOSC"
                        className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[25rem] px-0 md:px-2 border-0 md:border-l-2 border-l-cafeBosc'
                    />
                </div>
            </div>
        </div>
    )
}

export default NosotrosEquipo