import React from 'react';
import { ComponentViewer } from './components/ComponentViewer/ComponentViewer';
import { ButtonComp1, ButtonComp1JSX, ButtonComp1CSS } from './components/buttons/button1/ButtonComp1';
import { ButtonComp2, ButtonComp2JSX,ButtonComp2CSS } from './components/buttons/button2/ButtonComp2';
import { ButtonComp3, ButtonComp3JSX, ButtonComp3CSS } from './components/buttons/button3/ButtonComp3';

const App = () => {
  const components = [
    {
      name: 'Button1',
      component: <ButtonComp1 />,
      jsxCode: ButtonComp1JSX,
      cssCode: ButtonComp1CSS,
      activeTab: 'jsx',
    },
    {
      name: 'Button2',
      component: <ButtonComp2 />,
      jsxCode: ButtonComp2JSX,
      cssCode: ButtonComp2CSS,
      activeTab: 'jsx',
    },
    {
      name: 'Button3',
      component: <ButtonComp3 />,
      jsxCode: ButtonComp3JSX,
      cssCode: ButtonComp3CSS,
      activeTab: 'jsx',
    },
  ];

  return <ComponentViewer components={components} />;
};

export default App;
