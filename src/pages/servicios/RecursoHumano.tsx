import Questions from "../../components/servicios/Questions"
import SectionOne from "../../components/servicios/SectionOne"
import SectionTwo from "../../components/servicios/SectionTwo"
import Contactar from "../../components/ui/Contactar"
import { data } from "../../data/servicios/recursos-humanos"
import Imagen1 from "../../assets/Servicios-Recursos-humanos/BOSC_Talento001.webp"
import Imagen2 from "../../assets/Servicios-Recursos-humanos/BOSC_Talento002.webp"

const RecursoHumano = () => {
  return (
    <div>
      <SectionOne
        title="Recursos humanos"
        description="Enfoca tu equipo de RRHH en cuidar el clima laboral o medir el desempeño de colaboradores, mientras nos encargamos del reclutamiento de personal, ya sea masivo o uno a uno, de cualquier posición y nivel jerárquico."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2 className="text-title text-2xl md:text-4xl font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2">Reclutamiento de talento clave, mandos medios, masivos, ejecutivos y directores</li>
          <li className="before:content-['+'] before:mr-2">Estructura organizacional, organigrama, descripción de puestos</li>
          <li className="before:content-['+'] before:mr-2">Creación de modelo de gobierno en la administración y operación del negocio</li>
        </ul>
        <Contactar />
      </SectionTwo>

      <Questions
        data={data}
      />
    </div>
  )
}

export default RecursoHumano