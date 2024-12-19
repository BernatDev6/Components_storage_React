import React from 'react';
import { ButtonComp1, ButtonComp1JSX, ButtonComp1CSS } from './components/buttons/button1/ButtonComp1';
import { ButtonComp2, ButtonComp2JSX, ButtonComp2CSS } from './components/buttons/button2/ButtonComp2';
import { ButtonComp3, ButtonComp3JSX, ButtonComp3CSS } from './components/buttons/button3/ButtonComp3';
import { ButtonComp4, ButtonComp4JSX, ButtonComp4CSS } from './components/buttons/button4/ButtonComp4';
import { ButtonComp5, ButtonComp5JSX, ButtonComp5CSS } from './components/buttons/button5/ButtonComp5';
import { CardComp1, CardComp1JSX, CardComp1CSS } from './components/cards/card1/CardComp1';
import { CardComp2, CardComp2JSX, CardComp2CSS } from './components/cards/card2/CardComp2';
import { CardComp3, CardComp3JSX, CardComp3CSS } from './components/cards/card3/CardComp3';
import { CardComp4, CardComp4JSX, CardComp4CSS } from './components/cards/card4/CardComp4';
import { CardComp5, CardComp5JSX, CardComp5CSS } from './components/cards/card5/CardComp5';
import { CardComp6, CardComp6JSX, CardComp6CSS } from './components/cards/card6/CardComp6';
import { InputComp1, InputComp1JSX, InputComp1CSS } from './components/inputs/input1/InputComp1';
import { InputComp2, InputComp2JSX, InputComp2CSS } from './components/inputs/input2/InputComp2';
import { InputComp3, InputComp3JSX, InputComp3CSS } from './components/inputs/input3/InputComp3';
import { InputComp4, InputComp4JSX, InputComp4CSS } from './components/inputs/input4/InputComp4';
import { LoaderComp1, LoaderComp1JSX, LoaderComp1CSS } from './components/loaders/loader1/LoaderComp1';
import { LoaderComp2, LoaderComp2JSX, LoaderComp2CSS } from './components/loaders/loader2/LoaderComp2';
import { LoaderComp3, LoaderComp3JSX, LoaderComp3CSS } from './components/loaders/loader3/LoaderComp3';
import { LoaderComp4, LoaderComp4JSX, LoaderComp4CSS } from './components/loaders/loader4/LoaderComp4';
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
        {
          name: 'Button4',
          component: <ButtonComp4 />,
          jsxCode: ButtonComp4JSX,
          cssCode: ButtonComp4CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Button5',
          component: <ButtonComp5 />,
          jsxCode: ButtonComp5JSX,
          cssCode: ButtonComp5CSS,
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
        {
          name: 'Card4',
          component: <CardComp4 />,
          jsxCode: CardComp4JSX,
          cssCode: CardComp4CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Card5',
          component: <CardComp5 />,
          jsxCode: CardComp5JSX,
          cssCode: CardComp5CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Card6',
          component: <CardComp6 />,
          jsxCode: CardComp6JSX,
          cssCode: CardComp6CSS,
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
        {
          name: 'Input4',
          component: <InputComp4 />,
          jsxCode: InputComp4JSX,
          cssCode: InputComp4CSS,
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
        {
          name: 'Loader3',
          component: <LoaderComp3 />,
          jsxCode: LoaderComp3JSX,
          cssCode: LoaderComp3CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader4',
          component: <LoaderComp4 />,
          jsxCode: LoaderComp4JSX,
          cssCode: LoaderComp4CSS,
          activeTab: 'jsx',
        },
      ]
    }
  };

  return <MainRouter components={components} />;
};

export default App;
