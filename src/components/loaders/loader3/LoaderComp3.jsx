import React from 'react';
import './LoaderComp3.css'

export const LoaderComp3 = () => {
  return (
    <div className="loader3">
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
    </div>
  );
};

export const LoaderComp3JSX = `
export const LoaderComp3 = () => {
  return (
    <div className="loader3">
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
      <div className="loader3__part"></div>
    </div>
  );
};
`;

export const LoaderComp3CSS = `
.loader3 {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.loader3__part {
  width: 20px;
  height: 10px;
  margin: 0 4px;
  border-radius: 4px;
  animation: animation 1.2s ease-in-out infinite;
}

.loader3__part:nth-child(1) {
  background-color: #a453da;
}

.loader3__part:nth-child(2) {
  animation-delay: 0.1s;
  background-color: #6c53da;
}

.loader3__part:nth-child(3) {
  animation-delay: 0.2s;
  background-color: #53a4da;
}

.loader3__part:nth-child(4) {
  animation-delay: 0.3s;
  background-color: #53dabd;
}

.loader3__part:nth-child(5) {
  animation-delay: 0.4s;
  background-color: #53da5e;
}

@keyframes animation {
  0% {
    height: 10px;
  }

  50% {
    height: 50px;
  }

  100% {
    height: 10px;
  }
}
`;