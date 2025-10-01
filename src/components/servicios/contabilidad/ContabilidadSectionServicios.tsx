import React from 'react'

const ContabilidadSectionServicios = () => {
    const servicios = [
        {
            id: 1,
            texto: "Cálculo y timbrado de nómina",
            imagen: "/images/servicio-1.png" // Reemplazar con imagen real
        },
        {
            id: 2,
            texto: "Dispersión de nómina",
            imagen: "/images/servicio-2.png" // Reemplazar con imagen real
        },
        {
            id: 3,
            texto: "Cálculo de PTU y prima de riesgo de trabajo",
            imagen: "/images/servicio-3.png" // Reemplazar con imagen real
        },
        {
            id: 4,
            texto: "Cálculo de IMSS, SAR e INFONAVIT",
            imagen: "/images/servicio-4.png" // Reemplazar con imagen real
        },
        {
            id: 5,
            texto: "Presentación de declaraciones mensuales y bimestrales",
            imagen: "/images/servicio-5.png" // Reemplazar con imagen real
        },
        {
            id: 6,
            texto: "Manejo de plataformas IDSE y SIPARE",
            imagen: "/images/servicio-6.png" // Reemplazar con imagen real
        }
    ];

    return (
        <div className='bg-white py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                {/* Título */}
                <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                    SERVICIOS DE NÓMINA
                </h2>

                {/* Grid de servicios */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {servicios.map((servicio) => (
                        <div 
                            key={servicio.id}
                            className='flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group'
                        >
                            {/* Imagen */}
                            <div className='flex-shrink-0'>
                                <div className='w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300'>
                                    <span className='text-gray-600 font-bold text-lg'>📊</span>
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