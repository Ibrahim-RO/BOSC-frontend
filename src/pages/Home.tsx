import fondoHome from '../assets/Inicio/Base_Bosc_inicio.webp'
import icoBosc from '../assets/Inicio/bosc_icon.svg'
import icoInferiorBosc from '../assets/Inicio/Bosc_icon01.svg'

import ArticleOne from '../components/home/ArticleOne'
import ArticleServices from '../components/home/ArticleServices'
import ArticleExperience from '../components/home/ArticleExperience'
import Formulario from '../components/home/Formulario'

const Home = () => {
    return (
        <>
            <section
                className='flex items-center justify-center px-4 sm:px-6 lg:px-8'
                style={{
                    backgroundImage: `url(${fondoHome})`,
                    height: '100dvh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className='flex flex-col lg:flex-row items-center justify-center max-w-[90%] md:max-w-[85%] lg:max-w-[80%] gap-6 lg:gap-12'>
                    {/* Contenido de texto */}
                    <div className='w-full lg:w-[55%] space-y-3 md:space-y-4 text-center lg:text-left'>
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>¿Quiénes somos?</h2>
                        <div className='space-y-3 md:space-y-4'>
                            <p className='text-sm sm:text-base md:text-[1rem] leading-relaxed'>
                                Somos una firma multidisciplinaria que brinda soluciones
                                integrales a pequeñas y medianas empresas
                            </p>
                            <p className='text-sm sm:text-base md:text-[1rem] leading-relaxed'>
                                Nuestra firma está conformada por un grupo de
                                profesionales con amplia experiencia en diferentes
                                industrias y altamente capacitadas para brindar un
                                servicio de excelencia y de calidad.
                            </p>
                        </div>
                        <button className='bg-btn text-sm sm:text-base md:text-[1rem] font-semibold rounded-sm hover:bg-cafeBosc px-4 py-2 mt-3 cursor-pointer transition-colors'>
                            SABER MÁS
                        </button>
                    </div>

                    {/* Imagen */}
                    <div className='w-full lg:w-auto flex justify-center'>
                        <img
                            src={icoBosc}
                            alt="Icono de BOSC"
                            className='w-48 sm:w-56 md:w-64 lg:w-xl max-w-full'
                        />
                    </div>
                </div>

                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 py-4'>
                    <img
                        src={icoInferiorBosc}
                        alt="Icono inferior de BOSC"
                        className='w-10 sm:w-12 md:w-[3rem]'
                    />
                </div>
            </section>

            <section>
                <ArticleOne />
                <ArticleServices />
                <ArticleExperience />
                <Formulario />
            </section>
        </>
    )
}

export default Home