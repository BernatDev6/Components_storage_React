import React from 'react';
import './LoaderComp10.css'

export const LoaderComp10 = () => {
  return (
    <div className="loader10"></div>
  );
};

export const LoaderComp10JSX = `
export const LoaderComp10 = () => {
  return (
    <div className="loader10"></div>
  );
};
`;

export const LoaderComp10CSS = `
.loader10 {
  --color:no-repeat linear-gradient(#d49100 0 0);
  width: 40px;
  height: 30px;
  background:
    var(--color) 0    100%/8px 30px,
    var(--color) 50%  100%/8px 20px,
    var(--color) 100% 100%/8px 10px;
  position: relative;
  clip-path: inset(-100% 0);
}

.loader10:before{
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d49100;
  left: -16px;
  top: 0;
  animation: 
    loader10-animation1 2s   linear infinite,
    loader10-animation2 0.5s cubic-bezier(0,200,.8,200) infinite;
}

@keyframes loader10-animation1 {
  0% {
    left:-16px;transform:translateY(-8px)
  }
  100% {
    left:calc(100% + 8px);transform:translateY(22px)
  }
}
@keyframes loader10-animation2 {
  100% {
    top:-0.1px
  }
}
`;