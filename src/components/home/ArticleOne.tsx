import { Link } from 'react-router-dom'
import imgArticulo from '../../assets/Inicio/Bosc_001.webp'

const ArticleOne = () => {
    return (
        <div className='bg-negro flex items-center justify-center px-4 sm:px-8 lg:px-30 py-8 sm:py-10'>
            <div className='flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-8'>
                {/* Contenedor principal de contenido - arriba en móvil, izquierda en tablet/desktop */}
                <div className='flex flex-col items-center md:items-start justify-center w-full lg:w-[44%] text-center md:text-left'>
                    <div className='space-y-3 sm:space-y-4 w-full'>
                        <h3 className='text-lg sm:text-xl md:text-[1.1rem] lg:text-[1.5rem] font-bold text-cafeBosc'>
                            Impulsamos tu empresa <span className='text-white'>al siguiente nivel</span>
                        </h3>
                        <p className='text-sm sm:text-base md:text-[0.9rem] lg:text-[1.1rem] text-white leading-relaxed'>
                            Explora nuestros servicios y descubre cómo nuestro 
                            equipo puede ayudarte a alcanzar resultados reales 
                            y sostenibles.
                        </p>
                    </div>

                    {/* Botón centrado en móvil, alineado a la izquierda en tablet/desktop */}
                    <Link
                        to={'/servicios/contabilidad'}
                    className='text-white border-2 border-white text-sm sm:text-base md:text-[0.9rem] lg:text-[1rem] font-semibold rounded-sm hover:bg-cafeOscuro px-4 py-2 mt-4 sm:mt-5 cursor-pointer transition-colors w-auto'>
                        CONOCE NUESTROS SERVICIOS
                    </Link>
                </div>

                {/* Imagen - debajo en móvil, derecha en tablet/desktop */}
                <div className='w-full lg:flex-1 flex justify-center lg:justify-end'>
                    <img
                        src={imgArticulo}
                        alt="Icono de BOSC"
                        className='w-full max-w-sm sm:max-w-md lg:w-[25rem] px-2 border-x-0 lg:border-x-2 border-x-cafeBosc'
                    />
                </div>
            </div>
        </div>
    )
}

export default ArticleOne