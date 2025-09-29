import React from 'react'
import automotriz from '../../assets/Inicio/IconosCarrusel/automotriz.webp'
import bienes from '../../assets/Inicio/IconosCarrusel/bienesdeconsumo.webp'
import salud from '../../assets/Inicio/IconosCarrusel/salud.webp'
import ferroviaria from '../../assets/Inicio/IconosCarrusel/ferro.webp'
import manufactura from '../../assets/Inicio/IconosCarrusel/Manu.webp'
import maquila from '../../assets/Inicio/IconosCarrusel/Maquila.webp'
import inmobiliario from '../../assets/Inicio/IconosCarrusel/Inmobi.webp'
import servicios from '../../assets/Inicio/IconosCarrusel/Admin.webp'


const sector = [
    {
        title: "Automotriz",
        image: automotriz
    },
    {
        title: "Bienes de consumo",
        image: bienes
    },
    {
        title: "Farmacéutico y salud",
        image: salud
    },
    {
        title: "Ferroviaria",
        image: ferroviaria
    },
    {
        title: "Manufactura",
        image: manufactura
    },
    {
        title: "Maquiladoras",
        image: maquila
    },
    {
        title: "Sector inmobiliario",
        image: inmobiliario
    },
    {
        title: "Servicios administrativos",
        image: servicios
    },
];

const ArticleExperience = () => {
    return (
        <div className="bg-negro  mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-cafeBosc mb-6">
                Experiencia por sector
            </h1>

            <p className="text-lg md:text-xl text-white text-center max-w-4xl mx-auto mb-12 leading-relaxed">
                Nuestro equipo está calificado para la administración de diferentes sectores empresariales.
            </p>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-0 justify-items-center">
                {sector.map((sector, index) => (
                    <div
                        key={index}
                        className="transition-all duration-300 hover:-translate-y-1 p-0 lg:w-32"
                    >
                        <div className=" w-22 h-22 mx-auto mb-3  flex items-center justify-center">
                            <img
                                src={sector.image}
                                alt={sector.title}
                                className="w-full  object-contain cursor-pointer"
                            />
                        </div>

                        <h3 className="text-[1rem] font-semibold text-white text-center">
                            {sector.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticleExperience