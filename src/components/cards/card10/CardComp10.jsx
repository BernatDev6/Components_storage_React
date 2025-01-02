import React from 'react';
import './CardComp10.css'

export const CardComp10 = () => {
    return (
      <div className="card10">
        <div className="card10__face1">
          <div className="face1__content">
            <h2>Card 10</h2> 
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book lor. </p>
          </div>
        </div>
        <div className="card10__face2 face2">
          <h2>CARD 10</h2>
        </div>
      </div>
    );
};

export const CardComp10JSX = `
export const CardComp10 = () => {
    return (
      <div className="card10">
        <div className="card10__face1">
          <div className="face1__content">
            <h2>Card 10</h2> 
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book lor. </p>
          </div>
        </div>
        <div className="card10__face2 face2">
          <h2>CARD 10</h2>
        </div>
      </div>
    );
};
`;

export const CardComp10CSS = `
.card10 {
  position: relative;
  width: 260px;
  height: 400px;
  border-radius: 12px;
  background-color: #f0f0f0;
}

.card10__face2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card10__face1 {
  padding: 20px;
}

.face1__content {
  color: #1d1d1d;
}

.card10__face2 {
  background: linear-gradient(45deg, #3503ad, #30f78a);
  border-radius: 12px;
  transition: 0.4s;
}

.card10:hover .card10__face2 {
  height: 60px;
  border-radius: 0 0 12px 12px;
}

.card10__face2:before {
  content:'';
  position: absolute;
  top:0;
  left:0;
  width: 50%;
  height: 100%;
  background: #ffffff1a;
  border-radius: 12px;
}

.card10__face2 h2 {
  margin: 0;
  font-size: 3em;
  color: #f0f0f0;
  transition: 0.4s;
}

.card10:hover .card10__face2 h2 {
  font-size: 1.5em;
}
`;