import React from 'react'
import ico1 from '../../../assets/Servicios Contabilidad/Iconos/Bosc_Icons_TimbreNomina.webp'
import ico2 from '../../../assets/Servicios Contabilidad/Iconos/Bosc_Icons_DispersionNomina.webp'
import ico3 from '../../../assets/Servicios Contabilidad/Iconos/Bosc_Icons_CalculoPTU.webp'
import ico4 from '../../../assets/Servicios Contabilidad/Iconos/Bosc_Icons_IMSS-SAR-INFONA.webp'
import ico5 from '../../../assets/Servicios Contabilidad/Iconos/Bosc_Icons_DeclaracionMeBi.webp'
import ico6 from '../../../assets/Servicios Contabilidad/Iconos/Bosc_Icons_IDSE-SIPARE.webp'

const ContabilidadSectionServicios = () => {
    const servicios = [
        {
            id: 1,
            texto: "Cálculo y timbrado de nómina",
            imagen: ico1
        },
        {
            id: 2,
            texto: "Dispersión de nómina",
            imagen: ico2
        },
        {
            id: 3,
            texto: "Cálculo de PTU y prima de riesgo de trabajo",
            imagen: ico3
        },
        {
            id: 4,
            texto: "Cálculo de IMSS, SAR e INFONAVIT",
            imagen: ico4
        },
        {
            id: 5,
            texto: "Presentación de declaraciones mensuales y bimestrales",
            imagen: ico5
        },
        {
            id: 6,
            texto: "Manejo de plataformas IDSE y SIPARE",
            imagen: ico6
        }
    ];

    return (
        <div className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Título */}
                <h2 className='text-3xl md:text-4xl font-bold text-center text-cafeBosc mb-12'>
                    SERVICIOS DE NÓMINA
                </h2>

                {/* Grid de servicios */}
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:mx-10'>
                    {servicios.map((servicio) => (
                        <div
                            key={servicio.id}
                            className=' flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group'
                        >
                            {/* Imagen */}
                            <div className='flex-shrink-0'>
                                <div className='w-20 flex items-center justify-center transition-colors duration-300'>
                                    <img src={servicio.imagen} alt={servicio.texto} className='w-20 object-contain' />
                                </div>
                            </div>

                            {/* Texto */}
                            <div className='flex-1'>
                                <p className='text-gray-800 text-sm lg:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300'>
                                    {servicio.texto}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContabilidadSectionServicios;