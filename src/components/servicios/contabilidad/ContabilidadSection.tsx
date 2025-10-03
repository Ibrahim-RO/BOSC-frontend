import React from 'react'
import image from "../../../assets/Servicios Contabilidad/asesoria.webp"

const ContabilidadSection = () => {
    return (
        <div className='bg-negro flex items-center justify-center px-4 sm:px-8 lg:px-35 py-8 sm:py-10'>
            <div className='flex flex-col lg:flex-row items-center justify-center w-full gap-6 md:gap-8'>
                {/* Contenedor principal de contenido - arriba en móvil, izquierda en tablet/desktop */}
                <div className='flex flex-col items-start  justify-center w-full lg:w-[46%] text-left md:text-left space-y-5 px-5 md:px-5 lg:px-0'>
                    <div className='space-y-3 sm:space-y-4 w-full'>
                        <h2 className='text-[1.8rem] sm:text-xl md:text-[2.7rem] font-bold text-cafeBosc'>
                            ASESORÍA CONTABLE
                        </h2>
                        <p className='text-base sm:text-base md:text-[1rem] lg:text-[1rem] text-white leading-relaxed'>
                            Brindamos acompañamiento experto en temas contables de alta complejidad para facilitar la toma de decisiones estratégicas:
                        </p>
                    </div>
                    <ul className="list-none space-y-2 text-base md:text-[1rem] text-white">
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Tratamiento contable de inversiones en acciones</li>
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Instrumentos financieros derivados</li>
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Cálculos de impuestos derivados</li>
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Cálculos de impuestos diferidos</li>
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Consolición de estados financieros</li>
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Reconocimiento y valuación de activos intangibles</li>
                        <li className="before:content-['+'] before:mr-2 before:font-bold">Conversión de operaciones en moneda extranjera</li>
                    </ul>
                </div>

                {/* Contenedor de imagen y rectángulo - debajo en móvil, derecha en tablet/desktop */}
                <div className='relative w-full lg:flex-1 flex justify-center lg:justify-end'>
                    <div className='absolute w-full max-w-sm sm:max-w-md lg:w-[35rem] h-full bg-cafeBosc
                                   translate-y-2 translate-x-3 md:translate-y-6 md:translate-x-8 lg:translate-y-8 lg:translate-x-10
                                   transition-all duration-300' 
                         style={{
                             // Aseguramos que el rectángulo tenga exactamente el mismo tamaño que la imagen
                             aspectRatio: 'auto'
                         }}>
                    </div>

                    <img
                        src={image}
                        alt="Icono de BOSC"
                        className='w-full max-w-sm sm:max-w-md lg:w-[35rem] px-2 border-x-0 relative z-10
                                  transition-all duration-300'
                        style={{
                            // Mantenemos la relación de aspecto original de la imagen
                            aspectRatio: 'auto'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContabilidadSection