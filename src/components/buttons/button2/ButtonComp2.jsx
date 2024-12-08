import React from 'react';
import './ButtonComp2.css'

export const ButtonComp2 = () => {
  return (
    <button className="button2">
      Hover Me!
    </button>
  );
};

export const ButtonComp2JSX = `
<button className="button2">
  Hover Me!
</button>
`;

export const ButtonComp2CSS = `
.button2 {
    font-size: 18px;
    background-color: #1e88e5;
    color: #d6f0fc;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .button2:hover {
    color: #1e88e5;
    background-color: #d6f0fc;
  }
`;
