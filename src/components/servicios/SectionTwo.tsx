import type { ReactNode } from "react"

type SectionTwoType = {
    image: string
    children: ReactNode
    reverse?: boolean
}

const SectionTwo = ({ image, children, reverse = false }: SectionTwoType) => {
    return (
        <section className={`flex flex-col lg:flex-row w-full ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* CONTENEDOR DE TEXTO PRIMERO - siempre arriba en móvil */}
            <div className="w-full lg:w-4/7 flex items-center bg-white">
                <div className="p-10 lg:p-20 space-y-8">
                    {children}
                </div>
            </div>

            {/* CONTENEDOR DE IMAGEN SEGUNDO - siempre abajo en móvil */}
            <div className="w-full lg:w-3/7">
                <img
                    src={image}
                    alt="Alcance de servicios"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

export default SectionTwo