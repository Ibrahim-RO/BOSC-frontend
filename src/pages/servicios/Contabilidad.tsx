import SectionOne from "../../components/servicios/SectionOne"
import SectionTwo from "../../components/servicios/SectionTwo"
import Contactar from "../../components/ui/Contactar"
import Imagen1 from "../../assets/Servicios Contabilidad/contabilidad.webp"
import Imagen2 from "../../assets/Servicios Contabilidad/alcanceServicios.webp"
import ContabilidadSection from "../../components/servicios/contabilidad/ContabilidadSection"

const Contabilidad = () => {
  return (
    <div>
      <SectionOne
        title="Contabilidad y nómina"
        description="Nuestro servicio contable va mas allá del registro tradicional. Además de elaborar estados financieros, genetamos reportes integrales con análisis de tendencias, comparativos contra presupuesto e indicadores clave como margen de contribución, punto de equilibrio, utilidad operativa y flujo efectivo, brindando información estratégica para una mejor toma de decisiones."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2 className="text-title text-3xl md:text-[2.7rem] font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2">Contabilidad general para personas físicas y morales</li>
          <li className="before:content-['+'] before:mr-2">Estados financieros mensuales</li>
          <li className="before:content-['+'] before:mr-2">Estructura de costos fijos y variables</li>
          <li className="before:content-['+'] before:mr-2">Facturación y emisión de CFDIs</li>
          <li className="before:content-['+'] before:mr-2">Reportes e integraciones de cuentas</li>
          <li className="before:content-['+'] before:mr-2">Reparación de estados financieros individuales y consolidados, bajo NIF, IFRS, y USGAAP acompañados de las notas de los EEFF</li>
        </ul>
        <Contactar />
      </SectionTwo>
      <ContabilidadSection />
    </div>
  )
}

export default Contabilidad