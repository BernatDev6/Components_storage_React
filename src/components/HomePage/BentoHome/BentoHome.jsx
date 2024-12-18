import React from 'react'
import './BentoHome.css'
import { InputComp1 } from '../../inputs/input1/InputComp1';
import { InputComp2 } from '../../inputs/input2/InputComp2';
import { CardComp3 } from '../../cards/card3/CardComp3';
import { CardComp4 } from '../../cards/card4/CardComp4';
import { LoaderComp3 } from '../../loaders/loader3/LoaderComp3';
import { LoaderComp2 } from '../../loaders/loader2/LoaderComp2';

export const BentoHome = () => {
  return (
    <>
        <h2 className='text-center'>Examples</h2>
        <section className="container bento py-5">
            <div className="div1 group">
                <InputComp1 />
            </div>
            <div className="div2 group"> 
                <LoaderComp2 />
            </div>
            <div className="div3 group"> 
                <CardComp4 />
            </div>
            <div className="div4 group">
                <CardComp3 />
            </div>
            <div className="div5 group"> 
                <LoaderComp3 />
            </div>
            <div className="div6 group"> 
                <InputComp2 />
            </div>
        </section>
    </>
  )
}
