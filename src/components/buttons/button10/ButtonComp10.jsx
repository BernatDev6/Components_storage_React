import React from "react";
import "./ButtonComp10.css";

export const ButtonComp10 = () => {
  return (
    <button className="button10">
      Button 10
    </button>
  );
};

export const ButtonComp10JSX = `
export const ButtonComp10 = () => {
  return (
    <button className="button10">
      Button 10
    </button>
  );
};
`;

export const ButtonComp10CSS = `
.button10 {
  background-color: blue;
  border: 1px solid blue;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  padding: 1em 2em;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 150ms ease-in-out;
}

.button10:hover {
  box-shadow: 0 0 12px 8px blue inset, 0 0 10px 4px blue;
  border: blue;
  background: transparent;
}

.button10:active {
  transform: scale(0.95);
}
`;