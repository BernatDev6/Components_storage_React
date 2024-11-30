// ComponentViewer.jsx
import React, { useState, useEffect } from 'react';
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
    <div className="viewer-container">
      {/* Aside separado en su propio componente */}
      <NavbarComponent
        components={components}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      <div className="component-display">
        <div className="component-show">
          <h2>{activeComponent.name}</h2>
          <div className="component-result">{activeComponent.component}</div>
        </div>

        <div className="code-tabs">
          <div className="tabs">
            <button
              className={`tab ${activeComponent.activeTab === 'jsx' ? 'active' : ''}`}
              onClick={() =>
                setActiveComponent({ ...activeComponent, activeTab: 'jsx' })
              }
            >
              React Code
            </button>
            <button
              className={`tab ${activeComponent.activeTab === 'css' ? 'active' : ''}`}
              onClick={() =>
                setActiveComponent({ ...activeComponent, activeTab: 'css' })
              }
            >
              CSS Code
            </button>
          </div>
          <div className="tab-content">
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
  );
};
