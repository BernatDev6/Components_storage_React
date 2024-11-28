import React, { useState, useEffect } from 'react';
import '../ComponentViewer/ComponentViewer.css';

export const ComponentViewer = ({ components }) => {
  // Inicializamos el primer componente por defecto
  const [activeComponent, setActiveComponent] = useState({});
  // Estado para las secciones desplegables
  const [openSections, setOpenSections] = useState(
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

  // Función para copiar al portapapeles
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Código copiado al portapapeles!'); // Alerta cuando se copie el código
    }).catch((err) => {
      console.error('Error al copiar el código: ', err); // Manejo de errores si algo sale mal
    });
  };

  // Efecto para seleccionar el primer componente por defecto
  useEffect(() => {
    const firstComponent = Object.values(components)
      .flat() // Aplanamos todos los componentes en un solo array
      .find((comp) => comp); // Tomamos el primer componente
    if (firstComponent) {
      setActiveComponent(firstComponent);
    }
  }, [components]);

  return (
    <div className="viewer-container">
      {/* Lista de componentes - Un botón por cada componente */}
      <aside className="component-list">
        {/* Recorremos todas las secciones */}
        {Object.keys(components).map((section) => (
          <div key={section} className="section">
            <button
              className="aside-section-title"
              onClick={() => toggleSection(section)}
            >
              {section} <i class="fa-solid fa-angle-down"></i> {/* Nombre de las secciones */}
            </button>

            {/* Si la sección está abierta, mostramos los componentes */}
            {openSections[section] && (
              <div className="component-items">
                {components[section].map((comp, index) => (
                  <button
                    key={index}
                    className={`component-item ${activeComponent.name === comp.name ? 'active' : ''}`}
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

      {/* Vista del componente seleccionado */}
      <div className="component-display">
        <div className='component-show'>
          <h2>{activeComponent.name}</h2> {/* Muestra el nombre del componente activo */}
          <div className="component-result">
            {activeComponent.component} {/* Muestra el componente en sí (su JSX renderizado) */}
          </div>
        </div>

        {/* Pestañas para mostrar el código del componente */}
        <div className="code-tabs">
          <div className="tabs">
            {/* Pestaña React */}
            <button
              className={`tab ${activeComponent.activeTab === 'jsx' ? 'active' : ''}`}
              onClick={() => setActiveComponent({ ...activeComponent, activeTab: 'jsx' })}  // Cambiar a la pestaña React
            >
              React Code
            </button>

            {/* Pestaña CSS */}
            <button
              className={`tab ${activeComponent.activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveComponent({ ...activeComponent, activeTab: 'css' })}  // Cambiar a la pestaña CSS
            >
              CSS Code
            </button>
          </div>

          {/* Contenido de la pestaña activa */}
          <div className="tab-content">
            {/* Botón para copiar el código */}
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(activeComponent.activeTab === 'jsx' ? activeComponent.jsxCode : activeComponent.cssCode)}
            >
              <i className="fa-solid fa-copy"></i>
            </button>
            <div
              onClick={() => copyToClipboard(activeComponent.activeTab === 'jsx' ? activeComponent.jsxCode : activeComponent.cssCode)}
              className='pre-content'
            >
              {activeComponent.activeTab === 'jsx' ? (
                <>
                  <pre>
                    {activeComponent.jsxCode} {/* Muestra el código JSX en un formato preformateado */}
                  </pre>  
                  <div className='copy-overlay'>Copy</div> {/* Capa de 'Copy' */}
                </>
              ) : (
                <>
                  <pre>
                    {activeComponent.cssCode} {/* Muestra el código CSS en un formato preformateado */}
                  </pre>
                  <div className='copy-overlay'>Copy</div> {/* Capa de 'Copy' */}
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};