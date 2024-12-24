import React from 'react';
import './LoaderComp7.css'

export const LoaderComp7 = () => {
  return (
    <div className="loader7">
        <div className="loader7__box one"></div>
        <div className="loader7__box two"></div>
        <div className="loader7__box three"></div>
    </div>
  );
};

export const LoaderComp7JSX = `
export const LoaderComp7 = () => {
  return (
    <div className="loader7">
        <div className="loader7__box one"></div>
        <div className="loader7__box two"></div>
        <div className="loader7__box three"></div>
    </div>
  );
};
`;

export const LoaderComp7CSS = `
.loader7 {
    width: 80px;
    height: 80px;
    position: relative;
    transform: rotate(-45deg);
}

.loader7__box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(135, 0, 0, 0.6);
    background: linear-gradient(to right, #141562, #486FBC, #EAB5A1, #8DD6FF, #4973C9, #D07CA7, #F4915E, #F5919E, #B46F89, #141562, #486FBC);
    background-position: 0% 50%;
    background-size: 1000% 1000%;
    visibility: hidden;
}

.loader7__box.one {
    animation: gradient-animation 15s infinite, box1-animation 3.5s infinite;
}

.loader7__box.two {
    animation: gradient-animation 15s infinite, box2-animation 3.5s 0.15s infinite;
}

.loader7__box.three {
    animation: gradient-animation 15s infinite, box3-animation 3.5s 0.3s infinite;
}

@keyframes gradient-animation {
    to {
        background-position: 100% 50%;
    }
}
  
@keyframes box1-animation {
  0% {
    visibility: visible;
    clip-path: inset(55% 55% 0% 0% round 5%);
  }
  25% {
    clip-path: inset(0% 55% 55% 0% round 5%);
  }
  50% {
    clip-path: inset(0% 0% 55% 55% round 5%);
  }
  75% {
    clip-path: inset(55% 0% 0% 55% round 5%);
  }
  100% {
    clip-path: inset(55% 55% 0% 0% round 5%);
  }
}

@keyframes box2-animation {
  0% {
    visibility: visible;
    clip-path: inset(55% 0% 0% 55% round 5%);
  }
  25% {
    clip-path: inset(55% 55% 0% 0% round 5%);
  }
  50% {
    clip-path: inset(0% 55% 55% 0% round 5%);
  }
  75% {
    clip-path: inset(0% 0% 55% 55% round 5%);
  }
  100% {
    clip-path: inset(55% 0% 0% 55% round 5%);
  }
}

@keyframes box3-animation {
  0% {
    visibility: visible;
    clip-path: inset(0% 0% 55% 55% round 5%);
  }
  25% {
    clip-path: inset(55% 0% 0% 55% round 5%);
  }
  50% {
    clip-path: inset(55% 55% 0% 0% round 5%);
  }
  75% {
    clip-path: inset(0% 55% 55% 0% round 5%);
  }
  100% {
    clip-path: inset(0% 0% 55% 55% round 5%);
  }
}
`;