import React from "react";
import "./ButtonComp8.css";

export const ButtonComp8 = () => {
  return (
    <button className="button8">
      <span>Hover button</span>
      <span></span>
    </button>
  );
};

export const ButtonComp8JSX = `
export const ButtonComp8 = () => {
  return (
    <button className="button8">
      <span>Hover button</span>
      <span></span>
    </button>
  );
};
`;

export const ButtonComp8CSS = `
.button8 {
  position: relative;
  padding: .5em 1em;
  border: none;
  background-color: inherit;
  border-radius: 100px;
  color: #ffffff40;
  box-shadow: 0 0 0 2px #ffffff20;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button8 span:last-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #2196F3;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
}

.button8 span:first-child {
  position: relative;
  z-index: 1;
}

.button8:hover {
  box-shadow: 0 0 0 5px #2195f360;
  color: #ffffff;
}

.button8:active {
  scale: 0.95;
}

.button8:hover span:last-child {
  width: 150px;
  height: 150px;
  opacity: 1;
}
`;