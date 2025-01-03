import React from 'react';
import './LoaderComp18.css'

export const LoaderComp18 = () => {
  return (
    <div className="loader18"></div>
  );
};

export const LoaderComp18JSX = `
export const LoaderComp18 = () => {
  return (
    <div className="loader18"></div>
  );
};
`;

export const LoaderComp18CSS = `
.loader18 {
  width: 50px;
  aspect-ratio: 1;
  color:#dc1818;
  background:
   radial-gradient(circle at 60% 65%, currentColor 62%, #0000 65%) top left,
   radial-gradient(circle at 40% 65%, currentColor 62%, #0000 65%) top right,
   linear-gradient(to bottom left, currentColor 42%,#0000 43%) bottom left ,
   linear-gradient(to bottom right,currentColor 42%,#0000 43%) bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
}

.loader18:after {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0.8;
  animation: loader18-animation 1s infinite;
}

@keyframes loader18-animation {
  to {
    transform:scale(1.8);
    opacity:0
  }
}
`;