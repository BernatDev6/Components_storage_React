import React from 'react'
import './BentoHome.css'
import { InputComp7 } from '../../inputs/input7/InputComp7';
import { InputComp2 } from '../../inputs/input2/InputComp2';
import { CardComp3 } from '../../cards/card3/CardComp3';
import { CardComp8 } from '../../cards/card8/CardComp8';
import { LoaderComp3 } from '../../loaders/loader3/LoaderComp3';
import { LoaderComp4 } from '../../loaders/loader4/LoaderComp4';

export const BentoHome = () => {
  return (
    <>
        <h2 className='text-center'>Examples</h2>
        <section className="container bento py-5">
            <div className="div1 group">
                <InputComp7 />
            </div>
            <div className="div2 group"> 
                <LoaderComp4 />
            </div>
            <div className="div3 group"> 
                <CardComp8 />
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
