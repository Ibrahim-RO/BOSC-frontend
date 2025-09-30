import Questions from "../../components/servicios/Questions"
import SectionOne from "../../components/servicios/SectionOne"
import SectionTwo from "../../components/servicios/SectionTwo"
import Contactar from "../../components/ui/Contactar"
import Imagen1 from "../../assets/Servicios-Tecnologia/Bosc_Tech001.webp"
import Imagen2 from "../../assets/Servicios-Tecnologia/Bosc_Tech002.webp"
import { data } from "../../data/servicios/tecnologia/tecnologia"
import Cards from "../../components/servicios/Cards"
import { soporte } from "../../data/servicios/tecnologia/soporte-desarrollo"

const Tecnologia = () => {
  return (
    <div>
      <SectionOne
        title="Implementación tecnológica"
        description="Desde la implementación de ERP hasta desarrollos a la medida, ayudamos a que tus sistemas hablen el mismo idioma. Integramos procesos, automatizamos tareas y conectamos tus operaciones con soluciones prácticas y a la medida. Tu decides el ritmo, nosotros construimos la plataforma."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2 className="text-title text-2xl md:text-4xl font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2">Implementación de ERP y módulos <b>(Oracle, Odoo, Microsoft Dynamic)</b></li>
          <li className="before:content-['+'] before:mr-2">Gestión de proyecto <b>(PM)</b></li>
          <li className="before:content-['+'] before:mr-2">Implementación de Integraciones</li>
          <li className="before:content-['+'] before:mr-2">Arquitectura de soluciones</li>
          <li className="before:content-['+'] before:mr-2">Renta de equipo funcional (administración, contabilidad y finanzas)</li>
          <li className="before:content-['+'] before:mr-2">Renta de equipo técnico</li>
        </ul>
        <Contactar />
      </SectionTwo>

      <Cards 
        title="Soporte & desarrollo"
        data={soporte}
        classname="grid grid-cols-2 lg:grid-cols-4 gap-5 place-items-center"
      />

      <Questions
        data={data}
      />
    </div>
  )
}

export default Tecnologia