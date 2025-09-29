import React from 'react'
import logoBosc from '../../assets/Inicio/bosc_icon.svg'
import { Link } from 'react-router-dom'
import NavBar from './NavBar';


const Header = () => {
    return (
        <header className='w-full fixed top-0 z-50 flex justify-between items-center'>

            <div className='w-full h-16 flex justify-around items-center bg-header !p-5 md:!p-10'>
                <div className='text-white flex justify-center items-center gap-5'>
                    <Link to='/'>
                        <img src={logoBosc} alt="nombre onexo" className='max-h-12 border-r-2 border-color-white pr-2' />
                    </Link>
                    <h2 className='font-bold text-4xl'>BOSC</h2>
                    <p className='text-[0.8rem] sm:text-xl'>Back Office & Consulting</p>
                </div>

                <NavBar className="relative text-navtext" />
            </div>

        </header>
    )
}

export default Header