import React from 'react';
import './LoaderComp16.css'

export const LoaderComp16 = () => {
  return (
    <div className="loader16"></div>
  );
};

export const LoaderComp16JSX = `
export const LoaderComp16 = () => {
  return (
    <div className="loader16"></div>
  );
};
`;

export const LoaderComp16CSS = `
.loader16 {
  width: calc(6*30px);
  height: 50px;
  display: flex;
  color: #746246;
  filter: drop-shadow(30px 25px 0 currentColor) drop-shadow(60px 0 0 currentColor) drop-shadow(120px 0 0 currentColor);
  clip-path: inset(0 100% 0 0);
  animation: loader16-animation 2s infinite steps(7);
}

.loader16:before {
  content: "";
  width: 30px;
  height: 25px;
  --color:no-repeat radial-gradient(farthest-side,currentColor 92%,#0000);
  background: 
    var(--color) left /70% 75%,
    var(--color) right/20% 20%,
    var(--color) top 0 right 15%/20% 20%,
    var(--color) bottom 0 right 15%/20% 20%;
}

@keyframes loader16-animation {
  100% {
    clip-path: inset(0 -30px 0 0)
  }
}
`;