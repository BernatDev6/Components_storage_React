import React from 'react';
import { ComponentViewer } from './components/ComponentViewer/ComponentViewer';
import { ButtonExample, buttonExampleJSX, buttonExampleCSS } from './components/buttons/button1/ButtonComp1';
import { NewButtonExample, newButtonExampleJSX, newButtonExampleCSS } from './components/buttons/button2/ButtonComp2';

const App = () => {
  const components = [
    {
      name: 'Buton1',
      component: <ButtonExample />,
      jsxCode: buttonExampleJSX,
      cssCode: buttonExampleCSS,
      activeTab: 'jsx',
    },
    {
      name: 'Button2',
      component: <NewButtonExample />,
      jsxCode: newButtonExampleJSX,
      cssCode: newButtonExampleCSS,
      activeTab: 'jsx',
    },
  ];

  return <ComponentViewer components={components} />;
};

export default App;
