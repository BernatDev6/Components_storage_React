import React from 'react';
import { ButtonComp1, ButtonComp1JSX, ButtonComp1CSS } from './components/buttons/button1/ButtonComp1';
import { ButtonComp2, ButtonComp2JSX, ButtonComp2CSS } from './components/buttons/button2/ButtonComp2';
import { ButtonComp3, ButtonComp3JSX, ButtonComp3CSS } from './components/buttons/button3/ButtonComp3';
import { CardComp1, CardComp1JSX, CardComp1CSS } from './components/cards/card1/CardComp1';
import { CardComp2, CardComp2JSX, CardComp2CSS } from './components/cards/card2/CardComp2';
import { CardComp3, CardComp3JSX, CardComp3CSS } from './components/cards/card3/CardComp3';
import { InputComp1, InputComp1JSX, InputComp1CSS } from './components/inputs/input1/InputComp1';
import { InputComp2, InputComp2JSX, InputComp2CSS } from './components/inputs/input2/InputComp2';
import { InputComp3, InputComp3JSX, InputComp3CSS } from './components/inputs/input3/InputComp3';
import { LoaderComp1, LoaderComp1JSX, LoaderComp1CSS } from './components/loaders/loader1/LoaderComp1';
import { LoaderComp2, LoaderComp2JSX, LoaderComp2CSS } from './components/loaders/loader2/LoaderComp2';
import { MainRouter } from './routes/MainRouter';

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
        {
          name: 'Card3',
          component: <CardComp3 />,
          jsxCode: CardComp3JSX,
          cssCode: CardComp3CSS,
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
        {
          name: 'Input3',
          component: <InputComp3 />,
          jsxCode: InputComp3JSX,
          cssCode: InputComp3CSS,
          activeTab: 'jsx',
        },
      ]
    },
    Loaders: {
      icon: 'fa-solid fa-spinner',
      items: [
        {
          name: 'Loader1',
          component: <LoaderComp1 />,
          jsxCode: LoaderComp1JSX,
          cssCode: LoaderComp1CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader2',
          component: <LoaderComp2 />,
          jsxCode: LoaderComp2JSX,
          cssCode: LoaderComp2CSS,
          activeTab: 'jsx',
        },
      ]
    }
  };

  return <MainRouter components={components} />;
};

export default App;
