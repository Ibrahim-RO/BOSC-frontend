import logoBosc from '../../assets/Inicio/bosc_icon.svg'
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { navigationSection } from '../../data/menu';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 pt-8 space-y-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">

          {/* Columna 1: Logo BOSC */}
          <div className="flex flex-col items-center justify-center md:items-center md:border-r-2 md:border-gray-500">
            <div className='flex justify-center items-center gap-5'>
              <Link to='/'>
                <img src={logoBosc} alt="logo BOSC" className='max-h-12 border-r-2 border-color-white pr-2' />
              </Link>
              <div>
                <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl'>BOSC</h2>
                <p className='text-[0.7rem] sm:text-xs lg:text-[0.7rem]'>Back Office & Consulting</p>
              </div>
            </div>
          </div>

          {/* Columna 2: Páginas principales */}
          <div className="flex justify-center sm:justify-start">
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="hover:text-gray-500 transition-colors text-sm sm:text-base">
                  PÁGINA DE INICIO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-500 transition-colors text-sm sm:text-base">
                  NOSOTROS
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="flex justify-center sm:justify-center">
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-lg font-semibold mb-4">SERVICIOS</h3>
              <ul className="space-y-2">
                {navigationSection.map(item => (
                  <>
                    {item.subMenu?.map((to) => (
                      <a href={`servicios${to.href}`} className="block hover:text-gray-500 transition-colors text-sm sm:text-base">{to.title}</a>
                    ))}
                  </>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div className="flex justify-center sm:justify-start">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold mb-4">CONTÁCTANOS</h3>
              <ul className="space-y-3">
                <li className="flex justify-center sm:justify-start">
                  <div className='space-y-2'>
                    <p className='text-xs sm:text-sm md:text-base flex items-center gap-2 justify-center sm:justify-start'><FaPhoneAlt /> 8125 8171 44</p>
                    <p className='text-xs sm:text-sm md:text-base flex items-center gap-2 justify-center sm:justify-start'><FaPhoneAlt /> 8119 1755 23</p>
                    <p className='text-xs sm:text-sm md:text-base flex items-center gap-2 justify-center sm:justify-start'><MdEmail /> administracion@concultoresbosc.mx</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 text-center text-sm p-10">
        <p>&copy; {new Date().getFullYear()} Consultores BOSC. Todos los derechos reservados.</p>
        <p>Consulte nuestros <span className='font-bold'>términos de uso</span> para mas detalles</p>
      </div>
    </footer>
  );
};

export default Footer;