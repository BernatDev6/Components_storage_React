import React from 'react';
import './CardComp8.css'

export const CardComp8 = () => {
    return (
        <div className="card8">
            <div className="card8__text">
                <h2>Card 8</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est laborum animi, optio inventore necessitatibus.</p>
            </div>
            <div className="card8__overlay"></div>
        </div>
    );
};

export const CardComp8JSX = `
export const CardComp8 = () => {
    return (
        <div className="card8">
            <div className="card8__text">
                <h2>Card 8</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est laborum animi, optio inventore necessitatibus.</p>
            </div>
            <div className="card8__overlay"></div>
        </div>
    );
};
`;

export const CardComp8CSS = `
.card8 {
  position: relative;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px #0000001a;
  transition: transform 0.3s ease;
}

.card8:hover {
  transform: scale(1.02);
}

.card8__text {
  position: relative;
  z-index: 2;
  padding: 20px;
}

.card8__overlay {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #0000ff80, #ff000080);
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 1;
}

.card8:hover .card8__overlay {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
}
`;