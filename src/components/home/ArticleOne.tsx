import React from 'react'
import imgArticulo from '../../assets/Inicio/Bosc_001.webp'

const ArticleOne = () => {
    return (
        <div className='bg-negro flex items-center justify-center px-30 py-10'>
            <div className=' flex items-center justify-center w-full'>
                {/* Contenedor principal de contenido izquierdo */}
                <div className='flex flex-col items-start justify-center w-[50%]'>
                    <div className='space-y-2 w-full'>
                        <h3 className='text-[1.2rem] font-bold text-cafeBosc'>
                            Impulsamos tu empresa <span className='text-white'>al siguiente nivel</span>
                        </h3>
                        <p className='text-[1rem] text-white'>
                            Explora nuestros servicios y descubre cómo nuestro <br />
                            equipo puede ayudarte a alcanzar resultados reales <br />
                            y sostenibles.
                        </p>
                    </div>

                    {/* Botón alineado a la izquierda, solo el ancho necesario */}
                    <button className='text-white border-2 border-white text-[1rem] font-semibold rounded-sm hover:bg-cafeOscuro px-4 py-2 mt-5 cursor-pointer'>
                        CONOCE NUESTROS SERVICIOS
                    </button>
                </div>

                <div className='flex-1 flex justify-end'>
                    <img
                        src={imgArticulo}
                        alt="Icono de BOSC"
                        className='w-[25rem] px-2 border-x-2 border-x-cafeBosc'
                    />
                </div>
            </div>
        </div>
    )
}

export default ArticleOne