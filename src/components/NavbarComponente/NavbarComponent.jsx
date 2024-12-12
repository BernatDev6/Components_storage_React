import React from 'react';
import { Link } from "react-router";
import './NavbarComponent.css';

export const NavbarComponent = ({ components, activeComponent, setActiveComponent }) => {
    const [openSections, setOpenSections] = React.useState(
        Object.keys(components).reduce((acc, section) => {
            acc[section] = false;
            return acc;
        }, {})
    );

    const [isMenuOpen, setIsMenuOpen] = React.useState(false); // Estado del menú hamburguesa

    const toggleSection = (section) => {
        setOpenSections((prevSections) => ({
            ...prevSections,
            [section]: !prevSections[section],
        }));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleComponentClick = (comp) => {
        setActiveComponent(comp);  // Seleccionar el componente
        setIsMenuOpen(false);      // Cerrar el menú
    };

    return (
        <>
            
            {/* Botón del menú hamburguesa */}
            <div 
                className="menu-toggle d-xl-none py-2 px-3" 
            >
                <i className= {`hamburguer fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={toggleMenu}></i>
            </div>

            {/* Menú lateral */}
            <aside 
                className={`component-sidebar p-3 ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}
            >
                {Object.keys(components).map((section) => (
                    <div key={section}>
                        <button
                            className="section-button p-3"
                            onClick={() => toggleSection(section)}
                        >
                            <span>
                                <i className={components[section].icon}></i>
                                <span className='px-2'>{section}</span>
                                <i className="fa-solid fa-angle-down"></i>
                            </span>
                        </button>
                        {openSections[section] && (
                            <div className="expanded-section d-flex flex-column">
                                {components[section].items.map((comp, index) => (
                                    <button
                                        key={index}
                                        className={`component-button ${
                                            activeComponent.name === comp.name ? 'active' : ''
                                        }`}
                                        onClick={() => handleComponentClick(comp)}  // Cerrar el menú al hacer clic en el componente
                                    >
                                       <span>- {comp.name}</span> 
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </aside>

            {/* Fondo semitransparente cuando el menú está abierto */}
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
        </>
    );
};