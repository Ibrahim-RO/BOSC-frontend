import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './layouts/AppLayout'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter