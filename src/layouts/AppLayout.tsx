import React from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default AppLayout