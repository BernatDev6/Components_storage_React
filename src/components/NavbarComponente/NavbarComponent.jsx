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
        <aside className="component-sidebar">
            {Object.keys(components).map((section) => (
                <div key={section} className="section">
                    <button
                        className="aside-section-title"
                        onClick={() => toggleSection(section)}
                    >
                        <i className={components[section].icon}></i> <span>{section}</span>{' '}
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    {openSections[section] && (
                        <div className="component-items">
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
