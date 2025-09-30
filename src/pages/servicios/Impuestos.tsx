import SectionOne from "../../components/servicios/SectionOne"
import SectionTwo from "../../components/servicios/SectionTwo"
import Imagen1 from "../../assets/Servicios/Impuestos/BOSC_Impuestos_003.webp"
import Imagen2 from "../../assets/Servicios/Impuestos/BOSC_Impuestos_004.webp"
import Contactar from "../../components/ui/Contactar"
import Questions from "../../components/servicios/Questions"
import { data } from "../../data/servicios/impuestos"

const Impuestos = () => {
  return (
    <div>
      <SectionOne
        title="Impuestos"
        description="Optimizar el pago de impuestos siempre ha sido un reto y una gran sorpresa al terminar el cálculo. Nosotros te acompañamos en este reto, te asesoramos y planificamos en conjunto para cumplir los objetivos de tu empresa en materia de impuestos."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2 className="text-title text-3xl md:text-5xl font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2">Trámites ante al <b>SAT</b></li>
          <li className="before:content-['+'] before:mr-2">Declaraciones anuales para personas físicas y morales</li>
          <li className="before:content-['+'] before:mr-2">Cálculos de impuestos (ISR, IVA y otros)</li>
          <li className="before:content-['+'] before:mr-2"><b>Declaraciones</b> de impuestos mensuales</li>
          <li className="before:content-['+'] before:mr-2">Solicitud de devoluciones de IVA y atención a requerimientos</li>
          <li className="before:content-['+'] before:mr-2"><b>Recuperación de impuestos</b> federales</li>
          <li className="before:content-['+'] before:mr-2"><b>Planeación fiscal</b> para personas físicas y morales</li>
          <li className="before:content-['+'] before:mr-2">Diagnósticos para efectos de compra o venta de empresas</li>
          <li className="before:content-['+'] before:mr-2">Elaboración de <b>dictamen fiscal</b></li>
        </ul>
        <Contactar />
      </SectionTwo>

      <Questions
        data={data}
      />
    </div>
  )
}

export default Impuestos