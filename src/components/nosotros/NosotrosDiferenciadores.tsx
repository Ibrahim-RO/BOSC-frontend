import { useEffect, useState } from 'react'
import carru1 from '../../assets/Nosotros/Bosc_nosotros001.webp'
import carru2 from '../../assets/Nosotros/Bosc_nosotros002.webp'
import carru3 from '../../assets/Nosotros/Bosc_nosotros003.webp'
import carru4 from '../../assets/Nosotros/Bosc_nosotros004.webp'
import carru5 from '../../assets/Nosotros/Bosc_nosotros005.webp'

// Interface para los datos del carrusel
interface ItemCarrusel {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

const NosotrosDiferenciadores = () => {
  // Datos para el carrusel - DENTRO del componente
  const [datosCarrusel] = useState<ItemCarrusel[]>([
    {
      id: 1,
      titulo: "1. Acompañamiento",
      descripcion: "Estaremos contigo en cada paso que de tu negocio.",
      imagen: carru1
    },
    {
      id: 2,
      titulo: "2. Mejores prácticas",
      descripcion: "Nos actualizamos constatemente para ofrecer soluciones vigentes.",
      imagen: carru2
    },
    {
      id: 3,
      titulo: "3. Eficacia y eficiencia",
      descripcion: "Trabajamos por objetivos claros y mediables.",
      imagen: carru3
    },
    {
      id: 4,
      titulo: "4. Administración ágil",
      descripcion: "Nos convertimos en una extansión de tu negocio y vamos a tu ritmo",
      imagen: carru4
    },
    {
      id: 5,
      titulo: "5. Éxito priorizado",
      descripcion: "Trabajamos en lo importante para prevenir lo urgente.",
      imagen: carru5
    }
  ]);

  const [indiceActual, setIndiceActual] = useState<number>(0);
  const [estaAutomatico, setEstaAutomatico] = useState<boolean>(true);

  // Cambiar a la siguiente imagen - DENTRO del componente
  const siguienteImagen = (): void => {
    setIndiceActual((prevIndex: number) => 
      prevIndex === datosCarrusel.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Cambiar a la imagen anterior - DENTRO del componente
  const anteriorImagen = (): void => {
    setIndiceActual((prevIndex: number) => 
      prevIndex === 0 ? datosCarrusel.length - 1 : prevIndex - 1
    );
  };

  // Ir a una imagen específica - DENTRO del componente
  const irAImagen = (indice: number): void => {
    setIndiceActual(indice);
  };

  // Efecto para el movimiento automático - DENTRO del componente
  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;
    
    if (estaAutomatico) {
      intervalo = setInterval(() => {
        siguienteImagen();
      }, 5000); // Cambia cada 5 segundos
    }
    
    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [estaAutomatico, indiceActual]);

  // Pausar el carrusel al interactuar - DENTRO del componente
  const pausarCarrusel = (): void => {
    setEstaAutomatico(false);
  };

  // Reanudar el carrusel - DENTRO del componente
  const reanudarCarrusel = (): void => {
    setEstaAutomatico(true);
  };

  return (
    <div className='bg-[#E0A46D] flex items-center justify-center px-4 sm:px-8 lg:px-30 lg:pl-40 py-10'>
      <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl'>

        {/* Contenedor principal de contenido izquierdo */}
        <div className='flex flex-col items-start justify-center w-full lg:w-[50%] mb-8 lg:mb-0 lg:pr-8'>
          <div className='space-y-4 w-full text-center lg:text-left'>
            <h2 className='font-title text-2xl sm:text-3xl lg:text-[2.4rem] font-bold text-negro leading-tight'>
              DIFERENCIADORES EN <br className="hidden sm:block" /> EL MERCADO
            </h2>
            <p className='text-base sm:text-lg lg:text-[1rem] text-negro font-semibold leading-relaxed text-center lg:text-left'>
              Para lograr que tú te enfoques en crecer tu negocio, <br className="hidden sm:block" />
              sustentamos nuestros servicios back office con estos <br className="hidden sm:block" />
              diferenciadores.
            </p>
          </div>
        </div>

        {/* Contenedor del carrusel */}
        <div className='w-full lg:w-[50%] flex flex-col items-center'>

          {/* Carrusel */}
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-negro"
            onMouseEnter={pausarCarrusel}
            onMouseLeave={reanudarCarrusel}
            onTouchStart={pausarCarrusel}
            onTouchEnd={reanudarCarrusel}
          >
            {/* Contenedor de diapositivas */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${indiceActual * 100}%)` }}
            >
              {datosCarrusel.map((item: ItemCarrusel) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full flex flex-col justify-start text-white px-6 pt-6 pb-8 space-y-4 min-h-[22rem]"
                >
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className='w-full h-64 object-cover rounded-2xl'
                  />
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className='text-lg sm:text-xl font-bold mb-3'>{item.titulo}</h3>
                    <p className='text-sm sm:text-base leading-relaxed'>
                      {item.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={anteriorImagen}
              className=" absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
              aria-label="Imagen anterior"
            >
              <span className="text-white text-xl font-bold">‹</span>
            </button>
            <button
              onClick={siguienteImagen}
              className=" absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
              aria-label="Siguiente imagen"
            >
              <span className="text-white text-xl font-bold">›</span>
            </button>
          </div>

          {/* Indicadores (círculos) */}
          <div className="flex justify-center mt-6 space-x-3">
            {datosCarrusel.map((_, index: number) => (
              <button
                key={index}
                onClick={() => irAImagen(index)}
                className={`w-3 h-3 cursor-pointer rounded-full transition-all ${
                  index === indiceActual ? 'bg-negro scale-110' : 'bg-cafeOscuro'
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NosotrosDiferenciadores