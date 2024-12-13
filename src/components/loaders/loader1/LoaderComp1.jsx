import React from 'react';
import './LoaderComp1.css'

export const LoaderComp1 = () => {
  return (
    <>
        <svg className='svg-icon' viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </>
  );
};

export const LoaderComp1JSX = `
export const LoaderComp1 = () => {
  return (
    <>
        <svg className='svg-icon' viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
    </>
  );
};
`;

export const LoaderComp1CSS = `
.svg-icon {
    width: 4em;
    transform-origin: center;
    animation: rotate 1.8s linear infinite;
}

circle {
    fill: none;
    stroke: #ffc16f;
    stroke-width: 5;
    stroke-dasharray: 80, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.2s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 100, 200;
        stroke-dashoffset: -40px;
    }

    100% {
        stroke-dashoffset: -120px;
    }
}
`;