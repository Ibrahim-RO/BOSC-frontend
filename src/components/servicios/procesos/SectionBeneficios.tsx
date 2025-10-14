import { Link } from "react-router-dom";
import Image1 from "../../../assets/Servicios-Procesos/Bosc_002.svg"
import Image2 from "../../../assets/Servicios-Procesos/Bosc_003.svg"
import Image3 from "../../../assets/Servicios-Procesos/Bosc_001.svg"
import Image4 from "../../../assets/Servicios-Procesos/Bosc_004.svg"

const benefits = [
    {
        title: <><strong>Identificación de riesgos de error</strong> y fraude en la naturaleza del negocio</>,
        href: "#identificacion-riesgos",
        image: Image1
    },
    {
        title: <><strong>Elaboración de matrices de control</strong> interno y controles clave</>,
        href: "#implementacion-control",
        image: Image2
    },
    {
        title: <><strong>Implementación de control interno</strong></>,
        href: "#matrices-control",
        image: Image3
    },
    {
        title: <><strong>Otros servicios a la medida</strong></>,
        href: "#otros-servicios",
        image: Image4
    }
];


const SectionBeneficios = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-40">
            <div className="max-w-7xl mx-auto">
                <h2 className='font-title text-[1.7rem] md:text-[2.7rem] font-bold flex justify-center pb-10'>
                    CONOCE NUESTROS BENEFICIOS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-negro rounded-lg shadow-md px-6 pb-4 flex flex-col items-start h-full mx-12 md:mx-1 lg:mx-16"
                        >
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-20 my-5" 
                            />

                            <h3 className="text-lg text-white mb-6 flex-grow leading-tight">
                                {benefit.title}
                            </h3>

                            <Link
                                to={benefit.href}
                                className="font-title self-end hover:bg-white hover:text-azul cursor-pointer border-2 border-white text-white font-medium py-2 px-4 rounded transition duration-300 text-sm"
                                onClick={scrollTop}
                            >
                                SABER MÁS
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionBeneficios;