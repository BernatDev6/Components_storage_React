import React from 'react';
import './LoaderComp9.css'

export const LoaderComp9 = () => {
  return (
    <div className="loader9"></div>
  );
};

export const LoaderComp9JSX = `
export const LoaderComp9 = () => {
  return (
    <div className="loader9"></div>
  );
};
`;

export const LoaderComp9CSS = `
.loader9 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%,#3395f0) content-box;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
    radial-gradient(farthest-side,#0000 calc(100% - 8px - 1px),#000 calc(100% - 8px));
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: loader9-animation 1s infinite steps(10);
}

@keyframes loader9-animation {
  to {
    transform: rotate(1turn)
  }
}
`;