import SectionOne from "../../components/servicios/SectionOne"
import SectionTwo from "../../components/servicios/SectionTwo"
import Imagen1 from "../../assets/Servicios/Impuestos/BOSC_Impuestos_003.webp"
import Imagen2 from "../../assets/Servicios/Impuestos/BOSC_Impuestos_004.webp"
import Contactar from "../../components/ui/Contactar"
import Questions from "../../components/servicios/Questions"

// TODO: PASAR ESTO A LA CARPETA DATA Y ADAPTARLO SEGUN LA VISTA
const data = [
  {
    title: "Integridad y honestidad",
    content: "Nos conducimos con transparencia en todas nuestras relaciones para consolidarlas y agregarles valor."
  },
  {
    title: "Comunicación efectiva",
    content: "La asertividad, la claridad y la cortesía son factores que potencian la eficiencia de nuestros servicios y complementan."
  },
  {
    title: "Servicio de excelencia",
    content: "Oferecer a la alta gerencia un enfoque ene el análisis y toma decisiones oportunas y de valor."
  },
  {
    title: "Dirigir y detonar",
    content: "Proponer un cambio que siempre considere la mitigación de los riesgos identificados."
  }
]


const Impuestos = () => {
  return (
    <>
      <SectionOne
        title="Impuestos"
        description="Optimizar el pago de impuestos siempre ha sido un reto y una gran sorpresa al terminar el cálculo. Nosotros te acompañamos en este reto, te asesoramos y planificamos en conjunto para cumplir los objetivos de tu empresa en materia de impuestos."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2>Estados financieros</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis illo ipsum repellendus ducimus, animi aliquam? Culpa expedita reprehenderit, unde id harum eligendi distinctio alias laudantium ut voluptate iure, pariatur repudiandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa culpa laborum pariatur reprehenderit natus impedit totam ratione, voluptate eaque ad dolorem eius id veniam soluta consequuntur odio iste consequatur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil velit optio cupiditate corrupti necessitatibus. Dolores earum aliquam, nulla quibusdam in eaque pariatur dolorum quam reprehenderit, culpa explicabo dicta harum tempore.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, nulla quibusdam. Consequuntur voluptate placeat quasi dolore illo officia repellendus nesciunt non, sit animi est totam obcaecati corporis error atque omnis.
        <br />
        <Contactar />
      </SectionTwo>

      <Questions
        data={data}
      />
    </>
  )
}

export default Impuestos