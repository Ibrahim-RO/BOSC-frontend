import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { navigationSection } from '../../data/menu';
import { scrollTop } from '../../utils/scroll';

interface NavBarProps {
    menuOpen: boolean
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    subMenuOpen: boolean
    setSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ menuOpen, setMenuOpen, setSubMenuOpen, className = '' }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className={className}>
            <nav className="hidden lg:flex justify-center items-center gap-8 ">
                {navigationSection.map((section, idx) => (
                    <div key={idx}>
                        {section.title === 'servicios' ? (
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setOpen(!open)}
                                    className="text-white font-semibold uppercase flex justify-center items-center gap-1 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-title after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
                                >
                                    Servicios
                                    {open ? (
                                        <MdKeyboardArrowUp className="size-6" />
                                    ) : (
                                        <MdKeyboardArrowDown className="size-6" />
                                    )}
                                </button>

                                {open && (
                                    <div className="absolute top-full mt-2 -right-15 bg-white shadow-lg rounded-md overflow-hidden z-50 w-56">
                                        <ul className="flex flex-col">
                                            {section.subMenu?.map((item) => (
                                                <li key={item.href}>
                                                    <Link
                                                        to={`servicios${item.href}`}
                                                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100"
                                                        onClick={() => {
                                                            setOpen(false)
                                                            scrollTop()
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                to={section.href}
                                className={({ isActive }) => `font-semibold uppercase rounded-lg ${isActive ? 'bg-title text-black px-2.5 py-1.5' : "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-title after:transition-all after:duration-300 hover:after:w-full"}`}
                                onClick={scrollTop}
                            >
                                <span>{section.title}</span>
                            </NavLink>
                        )}
                    </div>
                ))}
            </nav>

            <button
                className='lg:hidden bg-white/20 p-3 rounded-full'
                onClick={() => {
                    setMenuOpen(!menuOpen)
                    setSubMenuOpen(false)
                }}
                aria-label="open-menu"
            >
                {menuOpen ? (
                    <IoMdClose className="text-white size-4" />
                ) : (
                    <FaBars className="text-white size-4" />
                )}
            </button>
        </div>
    )
}

export default NavBar