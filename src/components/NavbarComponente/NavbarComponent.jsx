// ComponentSidebar.jsx
import React from 'react';
import './NavbarComponent.css';

export const NavbarComponent = ({ components, activeComponent, setActiveComponent }) => {
    const [openSections, setOpenSections] = React.useState(
        Object.keys(components).reduce((acc, section) => {
            acc[section] = false;
            return acc;
        }, {})
    );

    const toggleSection = (section) => {
        setOpenSections((prevSections) => ({
            ...prevSections,
            [section]: !prevSections[section],
        }));
    };

    return (
        <aside className="component-sidebar p-3 d-xl-block d-flex">
            {Object.keys(components).map((section) => (
                <div key={section}>
                    <button
                        className="section-button"
                        onClick={() => toggleSection(section)}
                    >
                        <span>
                            <i className={components[section].icon}>
                            </i> <span>{section}</span>{' '}
                            <i className="fa-solid fa-angle-down"></i>
                        </span>
                    </button>
                    {openSections[section] && (
                        <div className="d-flex flex-column">
                            {components[section].items.map((comp, index) => (
                                <button
                                    key={index}
                                    className={`component-item ${activeComponent.name === comp.name ? 'active' : ''
                                        }`}
                                    onClick={() => setActiveComponent(comp)}
                                >
                                    {comp.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
};
