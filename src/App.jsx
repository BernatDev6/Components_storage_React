import React from 'react';
import { ComponentViewer } from './components/ComponentViewer/ComponentViewer';
import { ButtonComp1, ButtonComp1JSX, ButtonComp1CSS } from './components/buttons/button1/ButtonComp1';
import { ButtonComp2, ButtonComp2JSX, ButtonComp2CSS } from './components/buttons/button2/ButtonComp2';
import { ButtonComp3, ButtonComp3JSX, ButtonComp3CSS } from './components/buttons/button3/ButtonComp3';
import { CardComp1, CardComp1JSX, CardComp1CSS } from './components/cards/card1/CardComp1';
import { CardComp2, CardComp2JSX, CardComp2CSS } from './components/cards/card2/CardComp2';
import { InputComp1, InputComp1JSX, InputComp1CSS } from './components/inputs/input1/InputComp1';
import { InputComp2, InputComp2JSX, InputComp2CSS } from './components/inputs/input2/InputComp2';

const App = () => {
  const components = {
    Buttons: {
      icon: 'fa-solid fa-play',
      items: [
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
      ]
    },
    Cards: {
      icon: 'fa-regular fa-file',
      items: [
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
    },    
    Inputs: {
      icon: 'fa-solid fa-pen',
      items: [
        {
          name: 'Input1',
          component: <InputComp1 />,
          jsxCode: InputComp1JSX,
          cssCode: InputComp1CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Input2',
          component: <InputComp2 />,
          jsxCode: InputComp2JSX,
          cssCode: InputComp2CSS,
          activeTab: 'jsx',
        },
      ]
    },
    Loaders: {
      icon: 'fa-solid fa-spinner',
      items: []
    }
  };

  return <ComponentViewer className="component-viewer" components={components} />;
};

export default App;
