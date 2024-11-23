import React, { useState } from 'react';
import '../ComponentViewer/ComponentViewer.css';

export const ComponentViewer = ({ components }) => {
  // Estado local que mantiene el componente activo (el que el usuario selecciona)
  const [activeComponent, setActiveComponent] = useState(components[0]);  // Inicialmente el primer componente de la lista es el activo

  // Función para copiar al portapapeles
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert('Código copiado al portapapeles!'); // Alerta cuando se copie el código
    }).catch((err) => {
      console.error('Error al copiar el código: ', err); // Manejo de errores si algo sale mal
    });
  };

  return (
    <div className="viewer-container">
      {/* Lista de componentes - Un botón por cada componente */}
      <aside className="component-list">
        {/* Recorremos los componentes pasados como prop */}
        {components.map((comp, index) => (
          <button
            key={index}  // Usamos el índice como clave
            className={`component-item ${
              // Comprobamos si este componente está activo y le añadimos la clase "active" para resaltar el botón
              activeComponent.name === comp.name ? 'active' : ''
            }`}
            // Cuando se hace clic en un botón, se cambia el componente activo
            onClick={() => setActiveComponent(comp)}
          >
            {comp.name}  {/* Muestra el nombre del componente en el botón */}
          </button>
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
