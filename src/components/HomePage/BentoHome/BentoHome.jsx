import React from 'react'
import './BentoHome.css'
import { InputComp1 } from '../../inputs/input1/InputComp1';
import { InputComp2 } from '../../inputs/input2/InputComp2';
import { CardComp2 } from '../../cards/card2/CardComp2';
import { CardComp3 } from '../../cards/card3/CardComp3';
import programmingImg from '../../../assets/images/programming.webp'

export const BentoHome = () => {
  return (
    <section className="container bento">
        <div className="div1 group">1. React components

        </div>
        <div className="div2 group"> 
            <CardComp3 />
        </div>
        <div className="div3 group">3 

        </div>
        <div className="div4 group">
            <InputComp1 />
        </div>
        <div className="div5 group"> 
            <InputComp2 />
        </div>
        <div className="div6 group">

        </div>
        <div className="div7 group"> 
            <CardComp2 />
        </div>
    </section>
  )
}
