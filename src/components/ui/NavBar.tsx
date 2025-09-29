import React from 'react'
import { NavLink } from 'react-router-dom';
import { navigationSection } from '../../data/menu';

interface NavBarProps {
    className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
    const scroll = () => {
        window.scrollTo({
            top: 0
        });
    }
    return (
        <div className={className}>
            <ul className="hidden lg:flex gap-8 ">
                {navigationSection.map((section, idx) => (
                    <li key={idx}>
                        <NavLink
                            to={section.href}
                            className={({ isActive }) => `font-semibold uppercase  ${isActive ? 'bg-blue-400 px-2 py-1.5' : "text-white relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"}`}
                            onClick={scroll}
                        >
                            {section.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar