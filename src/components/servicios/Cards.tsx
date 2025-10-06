import type { DataCardType } from "../../types"

type CardsType = {
    title: string
    data: DataCardType[]
    classname: string
}

const Cards = ({ title, data, classname }: CardsType) => {
    return (
        <section className="max-w-7xl mx-auto px-10 py-10 lg:pt-20 space-y-15">
            <h2 className="text-title text-[1.7rem] md:text-[2.7rem] font-bold uppercase text-center">{title}</h2>
            <article className={classname}>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex flex-col  items-center gap-3 p-3 md:p-8"
                    >
                        <div className="bg-black p-2 md:p-5 w-full max-w-[300px] aspect-square flex items-center justify-center">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-full object-cover border border-cafeBosc"
                            />
                        </div>
                        <div className="w-4/5 sm:w-2/3">
                            <p className="text-center text-sm  md:text-lg font-bold">
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}

            </article>
        </section>
    )
}

export default Cards