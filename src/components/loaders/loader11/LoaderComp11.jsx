import React from 'react';
import './LoaderComp11.css'

export const LoaderComp11 = () => {
  return (
    <div className="loader11"></div>
  );
};

export const LoaderComp11JSX = `
export const LoaderComp11 = () => {
  return (
    <div className="loader11"></div>
  );
};
`;

export const LoaderComp11CSS = `
.loader11 {
  width: fit-content;
  font-size: 32px;
  background:linear-gradient(90deg,#00000000 50%,#00000000 0) right/200% 100%;
  animation: loader11-animation 2s infinite linear;
}

.loader11::before {
  content :"Loading...";
  letter-spacing: 4px;
  color: #0000;
  background: inherit;
  background-image: linear-gradient(90deg,#fff 50%,#4b4b4b 0);
  -webkit-background-clip:text;
          background-clip:text;
}

@keyframes loader11-animation{
  100% {
    background-position: left
  }
}
`;