import React from 'react';
import './LoaderComp3.css'

export const LoaderComp3 = () => {
  return (
    <>
      <div className="loader3">
        <div className="loader3__part"></div>
        <div className="loader3__part"></div>
        <div className="loader3__part"></div>
        <div className="loader3__part"></div>
      </div>
    </>
  );
};

export const LoaderComp3JSX = `
export const LoaderComp3 = () => {
  return (
    <>
      <div className="loader3">
        <div className="loader3__part"></div>
        <div className="loader3__part"></div>
        <div className="loader3__part"></div>
        <div className="loader3__part"></div>
      </div>
    </>
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
  background-color: #a453da;
  margin: 0 4px;
  border-radius: 4px;
  animation: animation 1s ease-in-out infinite;
}

.loader3__part:nth-child(2) {
  animation-delay: 0.1s;
}

.loader3__part:nth-child(3) {
  animation-delay: 0.2s;
}

.loader3__part:nth-child(4) {
  animation-delay: 0.3s;
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