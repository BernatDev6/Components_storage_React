import React from 'react';
import './CardComp9.css'

export const CardComp9 = () => {
    return (
        <div className="card9">
          <h2>CARD 9</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis fugit? Praesentium possimus aperiam quas, molestias repellat sed quidem aspernatur nemo incidunt blanditiis ea itaque consequatur modi dolorum pariatur ex.</p>
        </div>
    );
};

export const CardComp9JSX = `
export const CardComp9 = () => {
    return (
        <div className="card9">
          <h2>CARD 9</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis fugit? Praesentium possimus aperiam quas, molestias repellat sed quidem aspernatur nemo incidunt blanditiis ea itaque consequatur modi dolorum pariatur ex.</p>
        </div>
    );
};
`;

export const CardComp9CSS = `
.card9 {
  max-width: 300px;
  padding: 20px;
  background-color: #353535;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid transparent;
  transition: all 0.5s ease;
}

.card9 h2 {
  color: #ffb46d;
  font-size: 2rem;
  position: relative;
  z-index: 2;
}

.card9::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg, 
    transparent, 
    transparent 30%, 
    #ffb46d4d
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.card9:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px #ffb46d80;
  border: 1px solid #ffb46d;
}

.card9:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
`;