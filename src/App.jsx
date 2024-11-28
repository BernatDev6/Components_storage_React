import React from 'react';
import { ComponentViewer } from './components/ComponentViewer/ComponentViewer';
import { ButtonComp1, ButtonComp1JSX, ButtonComp1CSS } from './components/buttons/button1/ButtonComp1';
import { ButtonComp2, ButtonComp2JSX, ButtonComp2CSS } from './components/buttons/button2/ButtonComp2';
import { ButtonComp3, ButtonComp3JSX, ButtonComp3CSS } from './components/buttons/button3/ButtonComp3';
import { CardComp1, CardComp1JSX, CardComp1CSS } from './components/cards/card1/CardComp1';
import { CardComp2, CardComp2JSX, CardComp2CSS } from './components/cards/card2/CardComp2';
// Asegúrate de importar los demás componentes que uses
// Ejemplo:
// import { InputComp1, InputComp1JSX, InputComp1CSS } from './components/inputs/input1/InputComp1';
// import { LoaderComp1, LoaderComp1JSX, LoaderComp1CSS } from './components/loaders/loader1/LoaderComp1';

const App = () => {
  const components = {
    Buttons: [
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
    ],
    Cards: [
      {
        name: 'Card1',
        component: <CardComp1 />,
        jsxCode: CardComp1JSX,
        cssCode: CardComp1CSS,
        activeTab: 'jsx',
      },
      {
        name: 'Card2',
        component: <CardComp2 />,
        jsxCode: CardComp2JSX,
        cssCode: CardComp2CSS,
        activeTab: 'jsx',
      },
    ],
    Inputs: [],
    Loaders: [],
  };

  return <ComponentViewer components={components} />;
};

export default App;
