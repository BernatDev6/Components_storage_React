import React from 'react';
import './LoaderComp5.css'

export const LoaderComp5 = () => {
  return (
    <div className="loader5">
        <div className="loader5__circle loader5__circle-first"></div>
        <div className="loader5__circle loader5__circle-second"></div>
    </div>
  );
};

export const LoaderComp5JSX = `
export const LoaderComp5 = () => {
  return (
    <div className="loader5">
        <div className="loader5__circle loader5__circle-first"></div>
        <div className="loader5__circle loader5__circle-second"></div>
    </div>
  );
};
`;

export const LoaderComp5CSS = `
.loader5 {
  display: inline-block;
  position: relative;
  height: 64px;
  width: 64px;
}

.loader5__circle {
  color: aquamarine;
  position: absolute;
  animation: loader5-animation 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  border: 4px solid;
  border-radius: 50%;
  opacity: 1;
}

.loader5__circle-second {
  color: burlywood;
  animation-delay: -0.6s;
}

@keyframes loader5-animation {
  0% {
      top: 28px;
      left: 28px;
      opacity: 1;
      height: 0;
      width: 0;
  }

  100% {
      top: -1px;
      left: -1px;
      opacity: 0;
      height: 58px;
      width: 58px;
  }
}
`;