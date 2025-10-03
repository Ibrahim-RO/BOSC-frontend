import { data } from "../../data/servicios/tecnologia/tecnologia"
import Questions from "../../components/servicios/Questions"
import SectionOne from "../../components/servicios/SectionOne"
import Imagen1 from "../../assets/Servicios-Procesos/imagen1.webp"
import Section from "../../components/servicios/procesos/Section"
import SectionBeneficios from "../../components/servicios/procesos/SectionBeneficios"

const Procesos = () => {
  return (
    <div>
      <SectionOne
        title="Procesos y control interno"
        description="Queremos compartir nuestra experiencia lo que hemos hecho en diferentes industrias, te apoyamos con diferentes roles, actividades y procesos, de acuerdo con la necesidad del cliente."
        image={Imagen1}
      />

      <Section />
      <SectionBeneficios />

      <Questions
        data={data}
      />

    </div>
  )
}

export default Procesos