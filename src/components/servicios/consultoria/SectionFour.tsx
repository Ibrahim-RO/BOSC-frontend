import React from 'react'
import Image from '../../../assets/Servicios-Consultoria-Financiera/imagen3.webp'

const SectionFour = () => {
    return (
        <div className='bg-negro'>
            <div className='flex flex-col md:flex-row items-stretch w-full'>
                {/* Contenedor de texto - 40% en desktop, centrado vertical y horizontalmente */}
                <div className='w-full md:w-4/7 flex items-center justify-center py-8 md:py-0 px-4 md:px-6 lg:px-8'>
                    <div className='text-center md:text-left space-y-4 md:space-y-6 max-w-md'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-title leading-tight'>
                            CAPACITACIÓN Y ENTRENAMIENTO
                        </h2>
                        <p className='text-base md:text-lg lg:text-xl text-white leading-relaxed md:leading-loose'>
                            Para los administradores financieros aprendan a implementar la medición del desempeño financiero en los negocios.
                        </p>
                        <button className="text-sm md:text-base px-4 py-2 rounded-full uppercase hover:bg-cafeBosc hover:text-white bg-title font-semibold transition-colors cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300">
                            Quiero conocer
                        </button>
                    </div>
                </div>

                <div className='w-full md:w-3/7'>
                    <img
                        src={Image}
                        alt="Icono de BOSC"
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </div>


    )
}

export default SectionFour