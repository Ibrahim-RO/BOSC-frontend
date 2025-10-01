import { Link } from 'react-router-dom'
import icoContabilidad from '../../assets/Inicio/IconosServicios/Bosc_Icons_01Contabilidad.svg'
import icoEstados from '../../assets/Inicio/IconosServicios/Bosc_Icons_02EstadosFinan.svg'
import icoFinanzas from '../../assets/Inicio/IconosServicios/Bosc_Icons_03Finanzas.svg'
import icoConsultoria from '../../assets/Inicio/IconosServicios/Bosc_Icons_04ConsultoriaFinanciera.svg'
import icoProcesos from '../../assets/Inicio/IconosServicios/Bosc_Icons_05ControlInterno.svg'
import icoImpuestos from '../../assets/Inicio/IconosServicios/Bosc_Icons_06Impuestos.svg'
import icoLegal from '../../assets/Inicio/IconosServicios/Bosc_Icons_07Legal.svg'
import icoRecurso from '../../assets/Inicio/IconosServicios/Bosc_Icons_08Talento.svg'
import icoTecnologia from '../../assets/Inicio/IconosServicios/Bosc_Icons_09Tecnologia.svg'
import { scrollTop } from '../../utils/scroll'

// Datos para los servicios financieros (solo un ejemplo)
const services = [
  {
    title: "Contabilidad y nómina",
    image: icoContabilidad,
    href: "servicios/contabilidad"
  },
  {
    title: "Estados financieros",
    image: icoEstados,
    href: "servicios/estados-financieros"
  },
  {
    title: "Finanzas",
    image: icoFinanzas,
    href: "servicios/finanzas"
  },
  {
    title: "Consultoría financiera",
    image: icoConsultoria,
    href: "servicios/consultoria-financiera"
  },
  {
    title: "Procesos y control interno",
    image: icoProcesos,
    href: "servicios/procesos"
  },
  {
    title: "Impuestos",
    image: icoImpuestos,
    href: "servicios/impuestos"
  },
  {
    title: "Legal",
    image: icoLegal,
    href: "servicios/legal"
  },
  {
    title: "Recurso humano",
    image: icoRecurso,
    href: "servicios/recursos-humanos"
  },
  {
    title: "Tecnología",
    image: icoTecnologia,
    href: "servicios/tecnologia"
  },
  
];

const ArticleServices = () => {

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className='text-[1.5rem] text-center md:text-3xl font-bold flex justify-center pb-10'>PRÁCTICAS POR ÁREA DE NEGOCIO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-azul rounded-lg shadow-md p-6 flex flex-col items-start"
            >
              {/* Imagen */}
              <img 
                src={service.image} 
                alt={service.title}
                className="w-12 h-12 mb-4 "
              />
              
              {/* Título */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              
              {/* Botón */}
              <Link 
                to={service.href} 
                className=" hover:bg-white hover:text-black cursor-pointer border-2 border-white text-white font-medium py-2 px-4 rounded"
                onClick={scrollTop}
              >
                SABER MÁS
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default ArticleServices