import React from "react";
import "./ButtonComp7.css";

export const ButtonComp7 = () => {
  return (
    <button className="button7">
      Button
    </button>
  );
};

export const ButtonComp7JSX = `
export const ButtonComp7 = () => {
  return (
    <button className="button7">
      Button
    </button>
  );
};
`;

export const ButtonComp7CSS = `
.button7 {
  position: relative;
  padding: 1em 2em;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
  border: none;
  color: black;
  background-color: white;
}

.button7:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.button7:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
}

.button7::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.button7::after {
  background-color: #fff;
}

.button7:hover::after {
  transform: scaleX(1.2) scaleY(1.4);
  opacity: 0;
}
`;