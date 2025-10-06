import SectionOne from '../../components/servicios/SectionOne'
import SectionTwo from '../../components/servicios/SectionTwo'
import Imagen1 from "../../assets/Servicios-Consultoria-Financiera/imagen1.webp"
import Imagen2 from "../../assets/Servicios-Consultoria-Financiera/imagen2.webp"
import Imagen3 from "../../assets/Servicios-Consultoria-Financiera/imagen3.webp"
import Imagen4 from "../../assets/Servicios-Consultoria-Financiera/imagen4.webp"
import { data } from "../../data/servicios/tecnologia/tecnologia"
import Questions from '../../components/servicios/Questions'
import Cards from "../../components/servicios/Cards"
import { servicios } from '../../data/servicios/consultoria/figuras-servicios'
import SectionFour from '../../components/servicios/consultoria/SectionFour'

const ConsultoriaFinanciera = () => {
  return (
    <div>
      <SectionOne
        title="Consultoría financiera"
        description="Queremos compartir nuestra experiencia lo que hemos hecho en diferentes industrias, te apoyamos con diferentes roles, actividades y procesos, de acuerdo con la necesidad del cliente."
        image={Imagen1}
      />

      <SectionTwo image={Imagen2} reverse>
        <h2 className="text-title text-3xl md:text-[2.7rem] font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2 before:font-bold">Renta de CFO / Director de finanzas por horas</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Figura de consejero y/o comisario</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Reporte financiero integral para medir desempeño del negocio</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Elaboración de presupuestos y proyecciones</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Consultoría global</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Entrenamiento técnico contable</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Backoffice administrativo</li>
        </ul>
      </SectionTwo>

      <Cards
        title="Figuras de servicios"
        data={servicios}
        classname="grid grid-cols-2 lg:grid-cols-2 gap-5 place-items-center"
      />

      <SectionFour />

      <SectionTwo image={Imagen4} reverse>
        <h2 className="text-title text-3xl md:text-[2.7rem] font-bold uppercase">Backoffice <span className='text-azul'>Administrativo</span></h2>
        <p className='lg:-mt-6'><b>Renta de personal</b> para tareas administrativas</p>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2 before:font-bold">Renta de personal para tareas administrativas</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Emisión y gestión de facturación electrónica y notas de crédito</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Seguimiento a procesos de cobranza y recuperación de cartera</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Registro y control de pagos a proveedores</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Colocación y seguimiento de órdenes de compra y pedidos</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Levantamiento y control de inventarios físicos</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Registro contable de pagos y movimientos financieros</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Servicios administrativos personalizados según las necesidades del negocio</li>
        </ul>
      </SectionTwo>

      <Questions
        data={data}
      />

    </div>
  )
}

export default ConsultoriaFinanciera