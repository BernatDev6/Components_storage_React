import React from 'react';
import './LoaderComp6.css'

export const LoaderComp6 = () => {
  return (
    <div className="loader6">
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
    </div>
  );
};

export const LoaderComp6JSX = `
export const LoaderComp6 = () => {
  return (
    <div className="loader6">
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
      <div className="loader6__box"></div>
    </div>
  );
};
`;

export const LoaderComp6CSS = `
.loader6 {
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.loader6__box {
  width: 33px;
  height: 33px;
  position: relative;
  display: block;
  transform-origin: -50% center;
  border-radius: 15%;
}

.loader6__box:after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(173, 230, 176);
  border-radius: 15%;
  box-shadow: 0px 0px 10px 0px rgba(28, 255, 66, 0.4);
}

.loader6__box:nth-child(1) {
  animation: slide 1.5s ease-in-out infinite alternate;
}

.loader6__box:nth-child(1):after {
  animation: color-change 1.5s ease-in-out infinite alternate;
}

.loader6__box:nth-child(2):after {
  background-color: #00c70a;
}

.loader6__box:nth-child(3):after {
  background-color: #00f120;
}

.loader6__box:nth-child(4):after {
  background-color: #33ff5f;
}

.loader6__box:nth-child(5):after {
  background-color: #67ff8d;
}

.loader6__box:nth-child(2) {
  animation: flip-2 1.5s ease-in-out infinite alternate;
}
.loader6__box:nth-child(2):after {
  animation: squidge-2 1.5s ease-in-out infinite alternate;
}

.loader6__box:nth-child(3) {
  animation: flip-3 1.5s ease-in-out infinite alternate;
}
.loader6__box:nth-child(3):after {
  animation: squidge-3 1.5s ease-in-out infinite alternate;
}

.loader6__box:nth-child(4) {
  animation: flip-4 1.5s ease-in-out infinite alternate;
}
.loader6__box:nth-child(4):after {
  animation: squidge-4 1.5s ease-in-out infinite alternate;
}

.loader6__box:nth-child(5) {
  animation: flip-5 1.5s ease-in-out infinite alternate;
}
.loader6__box:nth-child(5):after {
  animation: squidge-5 1.5s ease-in-out infinite alternate;
}

@keyframes slide {
  0% {
    transform: translateX(0vw);
  }
  100% {
    transform: translateX(calc(250px - (33px * 1.5)));
  }
}

@keyframes color-change {
  0% {
    background-color: #29af00;
  }
  100% {
    background-color: #8fffab;
  }
}

@keyframes flip-2 {
  0%, 10% {
    transform: rotate(0);
  }
  40%, 100% {
    transform: rotate(-180deg);
  }
}

@keyframes squidge-2 {
  10% {
    transform-origin: center bottom;
    transform: scaleX(1.3) scaleY(0.7);
  }
  40%, 100% {
    transform-origin: center bottom;
    transform: scaleX(1) scaleY(1);
  }
}

@keyframes flip-3 {
  0%, 25% {
    transform: rotate(0);
  }
  55%, 100% {
    transform: rotate(-180deg);
  }
}

@keyframes squidge-3 {
  25% {
    transform-origin: center bottom;
    transform: scaleX(1.3) scaleY(0.7);
  }
  55%, 100% {
    transform-origin: center bottom;
    transform: scaleX(1) scaleY(1);
  }
}

@keyframes flip-4 {
  0%, 40% {
    transform: rotate(0);
  }
  70%, 100% {
    transform: rotate(-180deg);
  }
}

@keyframes squidge-4 {
  40% {
    transform-origin: center bottom;
    transform: scaleX(1.3) scaleY(0.7);
  }
  70%, 100% {
    transform-origin: center bottom;
    transform: scaleX(1) scaleY(1);
  }
}

@keyframes flip-5 {
  0%, 55% {
    transform: rotate(0);
  }
  85%, 100% {
    transform: rotate(-180deg);
  }
}

@keyframes squidge-5 {
  55% {
    transform-origin: center bottom;
    transform: scaleX(1.3) scaleY(0.7);
  }
  85%, 100% {
    transform-origin: center bottom;
    transform: scaleX(1) scaleY(1);
  }
}
`;