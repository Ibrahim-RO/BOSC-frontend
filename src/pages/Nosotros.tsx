import fondoNosotros from '../assets/Nosotros/bosc fondo002.webp'
import NosotrosEquipo from '../components/nosotros/NosotrosEquipo'
import NosotrosDiferenciadores from '../components/nosotros/NosotrosDiferenciadores'
import NosotrosFilosofia from '../components/nosotros/NosotrosFilosofia'

const Nosotros = () => {
  return (
    <>
      <section
        className='flex items-center justify-center w-full px-4 sm:px-6 lg:px-8'
        style={{
          backgroundImage: `url(${fondoNosotros})`,
          minHeight: '100dvh',
          height: 'auto',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='flex items-center justify-center w-full max-w-7xl'>
          <div className='w-full'>
            <div className='flex flex-col text-center justify-center space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-8'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-cafeBosc font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-normal'>
                OFRECEMOS UN BACKOFFICE <br className='hidden sm:block' />
                ORIENTADA A LA EXCELENCIA
              </h2>
              <p className='text-base sm:text-lg md:text-xl lg:text-[1.2rem] font-semibold leading-relaxed text-white'>
                Diseñado con entregables claros y oportunos para que la alta <br className='hidden sm:block' />
                gerencia se enfoque en el análisis y haga una toma de decisión <br className='hidden sm:block' />
                oportuna y de valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <NosotrosEquipo />
        <NosotrosDiferenciadores />      
        <NosotrosFilosofia />  
      </section>
    </>
  )
}

export default Nosotros;