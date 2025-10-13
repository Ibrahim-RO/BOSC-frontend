import SectionOne from '../../components/servicios/SectionOne'
import SectionTwo from '../../components/servicios/SectionTwo'
import Questions from '../../components/servicios/Questions'
import { data } from "../../data/servicios/tecnologia/tecnologia"
import Imagen1 from '../../assets/Servicios-Finanzas/BOSC_Tesoreria001.webp'
import Imagen2 from '../../assets/Servicios-Finanzas/BOSC_Tesoreria002.webp'
// import { data } from 'react-router-dom'

const Finanzas = () => {
  return (
    <div>
      <SectionOne
        title="Finanzas"
        description="El flujo es el rey, es crucial mantener el control del ecosistema que rodea al flujo de efectivo, cuentas bancarias, conciliaciones, estado de flujo de efectivo, administración de la cobranza y pagos, entre otros. Nosotros te ayudamos a implementar las mejores prácticas de mercado."
        image={Imagen1}
      />
      <SectionTwo image={Imagen2} >
        <h2 className="font-title text-title text-3xl md:text-[2.7rem] font-bold uppercase">Alcance de servicios</h2>
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="before:content-['+'] before:mr-2 before:font-bold">Apertura de cuentas bancarias</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Conciliación de cuentas bancarias</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Administración de cajas chicas</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold"><span className="font-semibold">Administración de bancos</span>; cobranza y pagos</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Estado de <span className="font-semibold">flujo de efectivo</span> diario, semanal, quincenal y mensual</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Estructura para <span className="font-semibold">fondear entidades</span> de un mismo grupo</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold">Administración de la deuda/préstamos</li>
          <li className="before:content-['+'] before:mr-2 before:font-bold"><span className="font-semibold">Inversiones</span></li>
        </ul>
      </SectionTwo>

      <Questions
        data={data}
      />

    </div>
  )
}

export default Finanzas