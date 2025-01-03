import React from 'react';
import { ButtonComp1, ButtonComp1JSX, ButtonComp1CSS } from './components/buttons/button1/ButtonComp1';
import { ButtonComp2, ButtonComp2JSX, ButtonComp2CSS } from './components/buttons/button2/ButtonComp2';
import { ButtonComp3, ButtonComp3JSX, ButtonComp3CSS } from './components/buttons/button3/ButtonComp3';
import { ButtonComp4, ButtonComp4JSX, ButtonComp4CSS } from './components/buttons/button4/ButtonComp4';
import { ButtonComp5, ButtonComp5JSX, ButtonComp5CSS } from './components/buttons/button5/ButtonComp5';
import { ButtonComp6, ButtonComp6JSX, ButtonComp6CSS } from './components/buttons/button6/ButtonComp6';
import { ButtonComp7, ButtonComp7JSX, ButtonComp7CSS } from './components/buttons/button7/ButtonComp7';
import { ButtonComp8, ButtonComp8JSX, ButtonComp8CSS } from './components/buttons/button8/ButtonComp8';
import { ButtonComp9, ButtonComp9JSX, ButtonComp9CSS } from './components/buttons/button9/ButtonComp9';
import { ButtonComp10, ButtonComp10JSX, ButtonComp10CSS } from './components/buttons/button10/ButtonComp10';
import { CardComp1, CardComp1JSX, CardComp1CSS } from './components/cards/card1/CardComp1';
import { CardComp2, CardComp2JSX, CardComp2CSS } from './components/cards/card2/CardComp2';
import { CardComp3, CardComp3JSX, CardComp3CSS } from './components/cards/card3/CardComp3';
import { CardComp4, CardComp4JSX, CardComp4CSS } from './components/cards/card4/CardComp4';
import { CardComp5, CardComp5JSX, CardComp5CSS } from './components/cards/card5/CardComp5';
import { CardComp6, CardComp6JSX, CardComp6CSS } from './components/cards/card6/CardComp6';
import { CardComp7, CardComp7JSX, CardComp7CSS } from './components/cards/card7/CardComp7';
import { CardComp8, CardComp8JSX, CardComp8CSS } from './components/cards/card8/CardComp8';
import { CardComp9, CardComp9JSX, CardComp9CSS } from './components/cards/card9/CardComp9';
import { CardComp10, CardComp10JSX, CardComp10CSS } from './components/cards/card10/CardComp10';
import { InputComp1, InputComp1JSX, InputComp1CSS } from './components/inputs/input1/InputComp1';
import { InputComp2, InputComp2JSX, InputComp2CSS } from './components/inputs/input2/InputComp2';
import { InputComp3, InputComp3JSX, InputComp3CSS } from './components/inputs/input3/InputComp3';
import { InputComp4, InputComp4JSX, InputComp4CSS } from './components/inputs/input4/InputComp4';
import { InputComp5, InputComp5JSX, InputComp5CSS } from './components/inputs/input5/InputComp5';
import { InputComp6, InputComp6JSX, InputComp6CSS } from './components/inputs/input6/InputComp6';
import { InputComp7, InputComp7JSX, InputComp7CSS } from './components/inputs/input7/InputComp7';
import { InputComp8, InputComp8JSX, InputComp8CSS } from './components/inputs/input8/InputComp8';
import { InputComp9, InputComp9JSX, InputComp9CSS } from './components/inputs/input9/InputComp9';
import { LoaderComp1, LoaderComp1JSX, LoaderComp1CSS } from './components/loaders/loader1/LoaderComp1';
import { LoaderComp2, LoaderComp2JSX, LoaderComp2CSS } from './components/loaders/loader2/LoaderComp2';
import { LoaderComp3, LoaderComp3JSX, LoaderComp3CSS } from './components/loaders/loader3/LoaderComp3';
import { LoaderComp4, LoaderComp4JSX, LoaderComp4CSS } from './components/loaders/loader4/LoaderComp4';
import { LoaderComp5, LoaderComp5JSX, LoaderComp5CSS } from './components/loaders/loader5/LoaderComp5';
import { LoaderComp6, LoaderComp6JSX, LoaderComp6CSS } from './components/loaders/loader6/LoaderComp6';
import { LoaderComp7, LoaderComp7JSX, LoaderComp7CSS } from './components/loaders/loader7/LoaderComp7';
import { LoaderComp8, LoaderComp8JSX, LoaderComp8CSS } from './components/loaders/loader8/LoaderComp8';
import { LoaderComp9, LoaderComp9JSX, LoaderComp9CSS } from './components/loaders/loader9/LoaderComp9';
import { LoaderComp10, LoaderComp10JSX, LoaderComp10CSS } from './components/loaders/loader10/LoaderComp10';
import { LoaderComp11, LoaderComp11JSX, LoaderComp11CSS } from './components/loaders/loader11/LoaderComp11';
import { LoaderComp12, LoaderComp12JSX, LoaderComp12CSS } from './components/loaders/loader12/LoaderComp12';
import { LoaderComp13, LoaderComp13JSX, LoaderComp13CSS } from './components/loaders/loader13/LoaderComp13';
import { LoaderComp14, LoaderComp14JSX, LoaderComp14CSS } from './components/loaders/loader14/LoaderComp14';
import { LoaderComp15, LoaderComp15JSX, LoaderComp15CSS } from './components/loaders/loader15/LoaderComp15';
import { LoaderComp16, LoaderComp16JSX, LoaderComp16CSS } from './components/loaders/loader16/LoaderComp16';
import { LoaderComp17, LoaderComp17JSX, LoaderComp17CSS } from './components/loaders/loader17/LoaderComp17';
import { LoaderComp18, LoaderComp18JSX, LoaderComp18CSS } from './components/loaders/loader18/LoaderComp18';
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
        {
          name: 'Button6',
          component: <ButtonComp6 />,
          jsxCode: ButtonComp6JSX,
          cssCode: ButtonComp6CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Button7',
          component: <ButtonComp7 />,
          jsxCode: ButtonComp7JSX,
          cssCode: ButtonComp7CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Button8',
          component: <ButtonComp8 />,
          jsxCode: ButtonComp8JSX,
          cssCode: ButtonComp8CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Button9',
          component: <ButtonComp9 />,
          jsxCode: ButtonComp9JSX,
          cssCode: ButtonComp9CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Button10',
          component: <ButtonComp10 />,
          jsxCode: ButtonComp10JSX,
          cssCode: ButtonComp10CSS,
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
        {
          name: 'Card7',
          component: <CardComp7 />,
          jsxCode: CardComp7JSX,
          cssCode: CardComp7CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Card8',
          component: <CardComp8 />,
          jsxCode: CardComp8JSX,
          cssCode: CardComp8CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Card9',
          component: <CardComp9 />,
          jsxCode: CardComp9JSX,
          cssCode: CardComp9CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Card10',
          component: <CardComp10 />,
          jsxCode: CardComp10JSX,
          cssCode: CardComp10CSS,
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
        {
          name: 'Input5',
          component: <InputComp5 />,
          jsxCode: InputComp5JSX,
          cssCode: InputComp5CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Input6',
          component: <InputComp6 />,
          jsxCode: InputComp6JSX,
          cssCode: InputComp6CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Input7',
          component: <InputComp7 />,
          jsxCode: InputComp7JSX,
          cssCode: InputComp7CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Input8',
          component: <InputComp8 />,
          jsxCode: InputComp8JSX,
          cssCode: InputComp8CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Input9',
          component: <InputComp9 />,
          jsxCode: InputComp9JSX,
          cssCode: InputComp9CSS,
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
        {
          name: 'Loader5',
          component: <LoaderComp5 />,
          jsxCode: LoaderComp5JSX,
          cssCode: LoaderComp5CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader6',
          component: <LoaderComp6 />,
          jsxCode: LoaderComp6JSX,
          cssCode: LoaderComp6CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader7',
          component: <LoaderComp7 />,
          jsxCode: LoaderComp7JSX,
          cssCode: LoaderComp7CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader8',
          component: <LoaderComp8 />,
          jsxCode: LoaderComp8JSX,
          cssCode: LoaderComp8CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader9',
          component: <LoaderComp9 />,
          jsxCode: LoaderComp9JSX,
          cssCode: LoaderComp9CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader10',
          component: <LoaderComp10 />,
          jsxCode: LoaderComp10JSX,
          cssCode: LoaderComp10CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader11',
          component: <LoaderComp11 />,
          jsxCode: LoaderComp11JSX,
          cssCode: LoaderComp11CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader12',
          component: <LoaderComp12 />,
          jsxCode: LoaderComp12JSX,
          cssCode: LoaderComp12CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader13',
          component: <LoaderComp13 />,
          jsxCode: LoaderComp13JSX,
          cssCode: LoaderComp13CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader14',
          component: <LoaderComp14 />,
          jsxCode: LoaderComp14JSX,
          cssCode: LoaderComp14CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader15',
          component: <LoaderComp15 />,
          jsxCode: LoaderComp15JSX,
          cssCode: LoaderComp15CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader16',
          component: <LoaderComp16 />,
          jsxCode: LoaderComp16JSX,
          cssCode: LoaderComp16CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader17',
          component: <LoaderComp17 />,
          jsxCode: LoaderComp17JSX,
          cssCode: LoaderComp17CSS,
          activeTab: 'jsx',
        },
        {
          name: 'Loader18',
          component: <LoaderComp18 />,
          jsxCode: LoaderComp18JSX,
          cssCode: LoaderComp18CSS,
          activeTab: 'jsx',
        },
      ]
    }
  };

  return <MainRouter components={components} />;
};

export default App;
