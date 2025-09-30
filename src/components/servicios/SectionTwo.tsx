import type { ReactNode } from "react"

type SectionTwoType = {
    image: string
    children: ReactNode
}

const SectionTwo = ({ image, children }: SectionTwoType) => {
    return (
        <section className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-2/5">
                <img
                    src={image}
                    alt="Alcance de servicios"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full lg:w-1/2 flex items-center bg-white">
                <div className="p-10 lg:p-20 space-y-8">
                    {children}
                </div>
            </div>
        </section>

    )
}

export default SectionTwo