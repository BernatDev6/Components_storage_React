// ComponentViewer.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router";
import { NavbarComponent } from '../NavbarComponente/NavbarComponent';
import './ComponentViewer.css';

export const ComponentViewer = ({ components }) => {
  const [activeComponent, setActiveComponent] = useState({});

  useEffect(() => {
    const firstComponent = Object.values(components)
      .flatMap((section) => section.items)
      .find((comp) => comp);
    if (firstComponent) {
      setActiveComponent(firstComponent);
    }
  }, [components]);

  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert('Código copiado al portapapeles!'))
      .catch((err) => console.error('Error al copiar el código: ', err));
  };

  return (
    <div className="viewer-container d-flex flex-column flex-lg-row">
      {/* Aside separado en su propio componente */}
      <NavbarComponent
        components={components}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      <div className="component-display container-fluid py-lg-3 pt-5 px-4 gap-3 d-flex flex-column">

        <Link to="/" className='back-link'><i className="fa-solid fa-angles-left"></i> Go back</Link>
        
        <div className='d-flex flex-column flex-lg-row gap-3'>

          <div className="component-show w-100 d-flex flex-column align-items-center">
            <h2 className="h2">{activeComponent.name}</h2>
            <div className="component-result mt-5">{activeComponent.component}</div>
          </div>

          <div className="code-tabs w-100">
            <div className="tabs">
              <button
                className={`tab ${activeComponent.activeTab === 'jsx' ? 'active' : ''}`}
                onClick={() =>
                  setActiveComponent({ ...activeComponent, activeTab: 'jsx' })
                }
              >
                JSX
              </button>
              <button
                className={`tab ${activeComponent.activeTab === 'css' ? 'active' : ''}`}
                onClick={() =>
                  setActiveComponent({ ...activeComponent, activeTab: 'css' })
                }
              >
                CSS
              </button>
            </div>
            <div className="d-flex flex-column">
              <button
                className="copy-btn"
                onClick={() =>
                  copyToClipboard(
                    activeComponent.activeTab === 'jsx'
                      ? activeComponent.jsxCode
                      : activeComponent.cssCode
                  )
                }
              >
                <i className="fa-solid fa-copy"></i>
              </button>
              <div className="pre-content"
                onClick={() =>
                  copyToClipboard(
                    activeComponent.activeTab === 'jsx'
                      ? activeComponent.jsxCode
                      : activeComponent.cssCode
                  )
                }
              >
                <div className="copy-overlay">Copy</div>
                <pre>
                  {activeComponent.activeTab === 'jsx'
                    ? activeComponent.jsxCode
                    : activeComponent.cssCode}
                </pre>
              </div>
            </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};
