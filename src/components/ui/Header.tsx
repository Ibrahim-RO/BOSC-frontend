import logoBosc from '../../assets/Inicio/bosc_icon.svg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import { useState } from 'react';
import { navigationSection } from '../../data/menu';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    return (
        <header className="w-full fixed top-0 z-50 flex flex-col justify-between items-center">
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="w-full h-16 flex justify-around items-center bg-header !p-5 md:!p-10"
            >
                <div className="text-white flex justify-center items-center gap-5">
                    <Link to="/">
                        <img
                            src={logoBosc}
                            alt="nombre onexo"
                            className="max-h-12 border-r-2 border-color-white pr-2"
                        />
                    </Link>
                    <h2 className="font-bold text-4xl">BOSC</h2>
                    <p className="text-[0.8rem] sm:text-xl">Back Office & Consulting</p>
                </div>

                <NavBar
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    subMenuOpen={subMenuOpen}
                    setSubMenuOpen={setSubMenuOpen}
                    className="relative text-navtext"
                />
            </motion.div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.4 }}
                        className="bg-white w-full min-h-dvh overflow-y-auto" // Esta línea permite el scroll
                    >
                        <nav>
                            {navigationSection.map((section, idx) => (
                                <div key={idx}>
                                    {section.title === "servicios" ? (
                                        <>
                                            <p
                                                className="w-full p-4 border-b border-b-gray-300 cursor-pointer uppercase flex justify-between items-center"
                                                onClick={() => setSubMenuOpen(!subMenuOpen)}
                                            >
                                                Servicios
                                                {subMenuOpen ? (
                                                    <MdKeyboardArrowUp className="size-6" />
                                                ) : (
                                                    <MdKeyboardArrowDown className="size-6" />
                                                )}
                                            </p>

                                            <AnimatePresence>
                                                {subMenuOpen && (
                                                    <motion.nav
                                                        initial={{ height: 0 }}
                                                        animate={{ height: "auto" }}
                                                        exit={{ height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        {section.subMenu?.map((item) => (
                                                            <Link
                                                                key={item.href}
                                                                to={`servicios${item.href}`}
                                                                className="block p-4 pl-15 text-sm border-b border-b-gray-300 uppercase"
                                                                onClick={() => {
                                                                    setMenuOpen(!menuOpen)
                                                                    setSubMenuOpen(false)
                                                                }}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        ))}
                                                    </motion.nav>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={section.href}
                                            className="block p-4 border-b border-b-gray-300 uppercase"
                                            onClick={() => {
                                                setMenuOpen(!menuOpen)
                                                setSubMenuOpen(!subMenuOpen)
                                            }}
                                        >
                                            {section.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header