import contact from "../assets/Contacto/TEXT015.jpg"
import Form from "../components/home/Form"

const Contacto = () => {
  return (
    <section
      className="w-full min-h-dvh bg-cover bg-center mt-16 md:mt-20"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <article className="lg:w-1/2 min-h-dvh flex flex-col justify-center p-10 md:p-15 lg:p-20 space-y-5">
        <div className="space-y-2">
          <p className="text-title text-4xl font-bold uppercase">Contáctanos</p>
          <p className="text-white text-xl">¿Cómo podemos ayudarte?</p>
        </div>
        <div className="space-y-4">
          <p className="text-base text-gray-300">Todos los campos son obligatorios</p>
          <Form 
            design="w-full px-4 py-4 border-b-2 border-title rounded-t-lg transition-all duration-200 bg-white/15 text-gray-300 placeholder-gray-400 outline-0"
            btn="border border-white bg-transparent hover:bg-white/15"
          />
        </div>
      </article>
    </section>
  )
}

export default Contacto
