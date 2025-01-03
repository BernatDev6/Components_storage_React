import React from 'react';
import './LoaderComp15.css'

export const LoaderComp15 = () => {
  return (
    <div className="loader15"></div>
  );
};

export const LoaderComp15JSX = `
export const LoaderComp15 = () => {
  return (
    <div className="loader15"></div>
  );
};
`;

export const LoaderComp15CSS = `
.loader15 {
  width: fit-content;
  font-size: 40px;
  line-height: 1.5;
  font-family: system-ui,sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #cecece;
  background:
    radial-gradient(1.13em at 50% 1.6em, #6888e2 99%, #0000 101%) calc(50% - 1.6em) 0 / 3.2em 100% text, radial-gradient(1.13em at 50% -0.8em, #0000 99%, #000 101%) 50% .8em / 3.2em 100% repeat-x text;
  animation: loader15-animation 2s linear infinite;
}

.loader15:before {
  content: "Loading...";
}

@keyframes loader15-animation {
  to {
    background-position: calc(50% + 1.6em) 0,calc(50% + 3.2em) .8em
  }
}
`;