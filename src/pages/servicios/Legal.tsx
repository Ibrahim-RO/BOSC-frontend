import Questions from "../../components/servicios/Questions"
import SectionOne from "../../components/servicios/SectionOne"
import SectionTwo from "../../components/servicios/SectionTwo"
import Contactar from "../../components/ui/Contactar"
import { data } from "../../data/servicios/legal"
import Imagen1 from '../../assets/Servicios-Legal/BOSC_Legal001.webp'
import Imagen2 from '../../assets/Servicios-Legal/BOSC_Legal002.webp'

const Legal = () => {
  return (
    <div>
      <SectionOne
        title="Material Legal"
        description="Ofrecemos asesoría legal corporativa para la constitución de entidades legales, elaboración de actas, contratos, convenios, sesiones, entre otras operaciones contractuales."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2 className="text-title text-2xl md:text-4xl font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2">Representación legal</li>
          <li className="before:content-['+'] before:mr-2">Asesoría legal corporativa</li>
          <li className="before:content-['+'] before:mr-2">Constitución de entidades legales</li>
          <li className="before:content-['+'] before:mr-2"><b>Registro de marcas ante el IMPI</b></li>
          <li className="before:content-['+'] before:mr-2">Elaboración de actas, contratos, convenios, fideicomisos, sesiones, entre otras operaciones contractuales</li>
          <li className="before:content-['+'] before:mr-2">Diagnósticos para efectos de compra o venta de empresas</li>
        </ul>
        <Contactar />
      </SectionTwo>

      <Questions
        data={data}
      />
    </div>
  )
}

export default Legal