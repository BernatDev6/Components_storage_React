import React from 'react';
import './LoaderComp2.css'

export const LoaderComp2 = () => {
  return (
    <>
        <div className="loader2">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </>
  );
};

export const LoaderComp2JSX = `
export const LoaderComp2 = () => {
  return (
    <>
        <div className="loader2">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </>
  );
};
`;

export const LoaderComp2CSS = `
.loader2 {
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    animation: spin 2s linear infinite;
}

.loader2 .circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
}

.loader2 .circle:nth-child(1) {
    top: 0;
    left: 0;
    background-color: #ff7c5f;
}

.loader2 .circle:nth-child(2) {
    top: 0;
    right: 0;
    background-color: #6bff86;
}

.loader2 .circle:nth-child(3) {
    bottom: 0;
    left: 0;
    background-color: #6783ff;
}

.loader2 .circle:nth-child(4) {
    bottom: 0;
    right: 0;
    background-color: #fff382;
}

@keyframes spin {
    0% {
      transform: scale(1) rotate(0);
    }
  
    20%, 25% {
      transform:  rotate(90deg);
    }
  
    45%, 50% {
      transform: scale(1) rotate(180deg);
    }
  
    70%, 75% {
      transform:  rotate(270deg);
    }
  
    95%, 100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;