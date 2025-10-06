import SectionOne from "../../components/servicios/SectionOne"
import Imagen1 from "../../assets/Servicios-Estados-Financieros/BOSC_EstadosFinancieros001.webp"
import Questions from "../../components/servicios/Questions"
import { data } from "../../data/servicios/tecnologia/tecnologia"

const EstadosFinancieros = () => {
  return (
    <div>
      <SectionOne
        title="Estados financieros"
        description="Tenemos amplia experiencia en la elaboración de estados financieros y sus notas, individuales y consolidados, bajo NIF e IFRS, en español e inglés. Nuestro valor agregado consiste en coordiar la emisión del estado financiero elaborado por BOSC, con el auditor de nuestro cliente."
        image={Imagen1}
      />

      <Questions
        data={data}
      />
    </div>
  )
}

export default EstadosFinancieros