import React from 'react';
import './LoaderComp12.css'

export const LoaderComp12 = () => {
  return (
    <div className="loader12"></div>
  );
};

export const LoaderComp12JSX = `
export const LoaderComp12 = () => {
  return (
    <div className="loader12"></div>
  );
};
`;

export const LoaderComp12CSS = `
.loader12 {
  width: 4px;
  color: #fff6cd;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
    19px 0     0 5px, 38px 0     0 5px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px;
  transform: translateX(-38px);
  animation: loader12-animation 2s infinite linear;
}

@keyframes loader12-animation {
  12.5% {
    box-shadow: 
      19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 5px,
      19px 0     0 5px, 38px 0     0 0px, 57px 0     0 5px,
      19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px
  }
  25% {
    box-shadow: 
      19px -19px 0 5px, 38px -19px 0 0px, 57px -19px 0 5px,
      19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
      19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 0px
  }
  50% {
    box-shadow: 
      19px -19px 0 5px, 38px -19px 0 5px, 57px -19px 0 0px,
      19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
      19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px
  }
  62.5% {
    box-shadow: 
      19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
      19px 0     0 5px, 38px 0     0 0px, 57px 0     0 0px,
      19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 5px
  }
  75% {
    box-shadow: 
      19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
      19px 0     0 0px, 38px 0     0 0px, 57px 0     0 5px,
      19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px
  }
  87.5% {
    box-shadow: 
      19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
      19px 0     0 0px, 38px 0     0 5px, 57px 0     0 0px,
      19px 19px  0 5px, 38px 19px  0 0px, 57px 19px  0 0px
  }
}
`;