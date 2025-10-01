import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { ScrollTo } from '../components/ui/ScrollTo';

const AppLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        <ScrollTo />
        <Toaster />
    </div>
  )
}

export default AppLayout