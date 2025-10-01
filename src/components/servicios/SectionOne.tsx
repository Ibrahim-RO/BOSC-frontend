type PresentationType = {
    title: string
    description: string
    image: string
}

const SectionOne = ({ title, description, image }: PresentationType) => {
    return (
        <section className="mt-15">
            <article className="bg-services">
                <div className="max-w-7xl mx-auto px-10 py-15 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 place-items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl text-title uppercase font-extrabold">{title}</h2>
                        <p className="text-base md:text-lg text-white">{description}</p>
                        <button className="text-white text-sm md:text-base border border-white px-4 py-2 rounded-full uppercase hover:bg-white/10 transition-colors cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300">
                            Quiero conocer
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={image}
                            alt={title}
                            className="md:w-[380px] md:h-[280px] border-4 border-cafeBosc rounded-2xl object-cover"
                        />

                    </div>
                </div>

            </article>
        </section>
    )
}

export default SectionOne