import React from 'react';
import './LoaderComp17.css'

export const LoaderComp17 = () => {
  return (
    <div className="loader17"></div>
  );
};

export const LoaderComp17JSX = `
export const LoaderComp17 = () => {
  return (
    <div className="loader17"></div>
  );
};
`;

export const LoaderComp17CSS = `
.loader17 {
  width: 100px;
  aspect-ratio: 1;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  background: #2c2c2c;
  filter: blur(5px) contrast(10) hue-rotate(300deg);
}

.loader17:before,
.loader17:after{ 
  content: "";
  grid-area: 1/1; 
  width: 40px;
  height: 40px;
  background: #ffff00;
  animation: loader17-animation 2s infinite;
}

.loader17:after{ 
  animation-delay: -1s;
}

@keyframes loader17-animation{
  0% {
    transform: translate(0, 0)
  }
  25% {
    transform: translate(100%, 0)
  }
  50% {
    transform: translate(100%, 100%)
  }
  75% {
    transform: translate(0, 100%)
  }
  100% {
    transform: translate(0, 0)
  }
}
`;