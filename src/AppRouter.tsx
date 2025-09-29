import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './layouts/AppLayout'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Contabilidad from './pages/servicios/Contabilidad'
import EstadosFinancieros from './pages/servicios/EstadosFinancieros'
import Finanzas from './pages/servicios/Finanzas'
import ConsultoriaFinanciera from './pages/servicios/ConsultoriaFinanciera'
import Impuestos from './pages/servicios/Impuestos'
import Legal from './pages/servicios/Legal'
import RecursoHumano from './pages/servicios/RecursoHumano'
import Tecnologia from './pages/servicios/Tecnologia'
import Procesos from './pages/servicios/Procesos'


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/servicios'>
            <Route path='contabilidad' element={<Contabilidad />} />
            <Route path='estados-financieros' element={<EstadosFinancieros />} />
            <Route path='finanzas' element={<Finanzas />} />
            <Route path='consultoria-financiera' element={<ConsultoriaFinanciera />} />
            <Route path='procesos' element={<Procesos />} />
            <Route path='impuestos' element={<Impuestos />} />
            <Route path='legal' element={<Legal />} />
            <Route path='recursos-humanos' element={<RecursoHumano />} />
            <Route path='tecnologia' element={<Tecnologia />} />
          </Route>
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter