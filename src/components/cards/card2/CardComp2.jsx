import React from 'react';
import './CardComp2.css'

export const CardComp2 = () => {
  return (
    <>
        <div class="card2">
            <div class="flip-card-inner">
                <div class="front-card">
                    <p class="title-card">FLIP CARD</p>
                    <p>👀 Hover to see more! 👀</p>
                </div>
                <div class="back-card">
                    <p class="title-card">BACK FACE</p>
                    <p>🚫 Leave Me 🚫</p>
                </div>
            </div>
        </div>
    </>
  );
};

export const CardComp2JSX = `
export const CardComp2 = () => {
  return (
    <>
        <div class="card2">
            <div class="flip-card-inner">
                <div class="front-card">
                    <p class="title-card">FLIP CARD</p>
                    <p>👀 Hover to see more! 👀</p>
                </div>
                <div class="back-card">
                    <p class="title-card">BACK FACE</p>
                    <p>🚫 Leave Me 🚫</p>
                </div>
            </div>
        </div>
    </>
  );
};
`;

export const CardComp2CSS = `
.card2 {
    width: 200px;
    height: 280px;
    perspective: 1000px;
  }
  
  .title-card {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .card2:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .front-card, .back-card {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 12px;
    backface-visibility: hidden;
    border: 1px solid #0051ff;
    border-radius: 8px;
  }
  
  .front-card {
    background: linear-gradient(120deg, #c4f6ff, #defffd);
    color: #0051ff;
  }
  
  .back-card {
    background: linear-gradient(120deg, #7aa4ff, #0051ff);
    color: #c4f6ff;
    transform: rotateY(180deg);
  }
`;
