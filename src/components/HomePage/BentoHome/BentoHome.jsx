import React from 'react'
import './BentoHome.css'
import { InputComp1 } from '../../inputs/input1/InputComp1';
import { InputComp2 } from '../../inputs/input2/InputComp2';
import { CardComp2 } from '../../cards/card2/CardComp2';
import { CardComp3 } from '../../cards/card3/CardComp3';
import programmingImg from '../../../assets/images/programming.webp'

export const BentoHome = () => {
  return (
    <section class="container bento">
        <div class="div1 group">1. React components

        </div>
        <div class="div2 group"> 
            <CardComp3 />
        </div>
        <div class="div3 group">3 

        </div>
        <div class="div4 group">
            <img src={programmingImg} alt="" className='w-100'/>
        </div>
        <div class="div5 group"> 
            <InputComp1 />
        </div>
        <div class="div6 group"> 
            <InputComp2 />
        </div>
        <div class="div7 group">7 

        </div>
        <div class="div8 group">8 

        </div>
        <div class="div9 group">
            <CardComp2 />
        </div>
    </section>
  )
}
