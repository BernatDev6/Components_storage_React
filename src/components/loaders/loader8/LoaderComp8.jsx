import React from 'react';
import './LoaderComp8.css'

export const LoaderComp8 = () => {
  return (
    <div className="loader8"></div>
  );
};

export const LoaderComp8JSX = `
export const LoaderComp8 = () => {
  return (
    <div className="loader8"></div>
  );
};
`;

export const LoaderComp8CSS = `
.loader8 {
  --color: no-repeat linear-gradient(#f3f3f3 0 0);
  height: 60px;
  aspect-ratio: 1;
  background: var(--color), var(--color), var(--color), var(--color);
  background-size: 33.4% 33.4%;
  animation: loader8-animation 2s infinite linear;
}

@keyframes loader8-animation {
  0%    {
    background-position:0 0, 50% 0, 0 50%, 50% 50%
  }
  12.5% {
    background-position:50% 0, 100% 0, 0 50%, 50% 50%
  }
  25%   {
    background-position:50% 0, 100% 0, 50% 50%, 100% 50%
  }
  37.5% {
    background-position:50% 0, 100% 50%, 50% 50% , 100% 100%
  }
  50%   {
    background-position:50% 50%, 100% 50%, 50% 100%, 100% 100%
  }
  62.5% {
    background-position:50% 50%, 100% 50%, 0 100%, 50% 100%
  }
  75%   {
    background-position:0 50%, 50% 50%, 0 100%, 50% 100%
  }
  87.5% {
    background-position:0 0, 50% 50%, 0 50%, 50% 100%
  }
  100%  {
    background-position:0 0, 50% 0, 0 50%, 50% 50%
  }
}
`;