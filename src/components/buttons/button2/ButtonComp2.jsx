import React from 'react';
import './ButtonComp2.css'

export const NewButtonExample = () => {
  return (
    <button className="new-button-example">
      Hover Me!
    </button>
  );
};

export const newButtonExampleJSX = `
export const NewButtonExample = () => {
  return (
    <button className="new-button-example">
      Hover Me!
    </button>
  );
};
`;

export const newButtonExampleCSS = `
.new-button-example {
    background-color: #1e88e5;
    color: #d6f0fc;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .new-button-example:hover {
    color: #1e88e5;
    background-color: #d6f0fc;
  }
`;
