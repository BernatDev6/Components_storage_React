import React from 'react';
import './LoaderComp4.css'

export const LoaderComp4 = () => {
  return (
    <div class="loader4"></div>
  );
};

export const LoaderComp4JSX = `
export const LoaderComp4 = () => {
  return (
    <div class="loader4"></div>
  );
};
`;

export const LoaderComp4CSS = `
.loader4 {
  width: 40px;
  height: 40px;
  margin: auto;
  position: relative;
}

.loader4:before {
  content: '';
  width: 40px;
  height: 5px;
  background: #b6f08050;
  position: absolute;
  top: 50px;
  left: 0;
  border-radius: 50%;
  animation: shadow-animation 0.6s linear infinite;
}

.loader4:after {
  content: '';
  width: 100%;
  height: 100%;
  background: #adf080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: loader-animation 0.6s linear infinite;
}

@keyframes loader-animation {
  15% {
    border-bottom-right-radius: 4px;
  }

  25% {
    transform: translateY(6px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(6px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow-animation {

  0%,
    100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }
}
`;