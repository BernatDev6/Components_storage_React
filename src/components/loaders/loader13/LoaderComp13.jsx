import React from 'react';
import './LoaderComp13.css'

export const LoaderComp13 = () => {
  return (
    <div className="loader13"></div>
  );
};

export const LoaderComp13JSX = `
export const LoaderComp13 = () => {
  return (
    <div className="loader13"></div>
  );
};
`;

export const LoaderComp13CSS = `
.loader13 {
  width: 60px;
  aspect-ratio: 2;
  --color: no-repeat radial-gradient(circle closest-side,#c7c7c7 90%,#00000000);
  background: 
    var(--color) 0%   50%,
    var(--color) 50%  50%,
    var(--color) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: loader13-animation 1s infinite linear;
}

@keyframes loader13-animation {
    20% {
      background-position:0% 0%,50% 50%, 100% 50%
    }
    40% {
      background-position:0% 100%, 50% 0%, 100% 50%
    }
    60% {
      background-position:0% 50%, 50% 100%, 100% 0%
    }
    80% {
      background-position:0% 50%, 50% 50%, 100% 100%
    }
}
`;