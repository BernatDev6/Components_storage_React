import React from 'react';
import './InputComp1.css'

export const InputComp1 = () => {
  return (
    <>
      <div className="input1">
          <input type="input" className="input-field" placeholder="Name" />
          <label htmlFor="name" className="input-label">Name</label>
      </div>
    </>
  );
};

export const InputComp1JSX = `
export const InputComp1 = () => {
  return (
    <>
      <div className="input1">
          <input type="input" className="input-field" placeholder="Name" />
          <label htmlFor="name" className="input-label">Name</label>
      </div>
    </>
  );
};
`;

export const InputComp1CSS = `
.input1 {
    position: relative;
    padding: 20px 0 0;
    max-width: 160px;
  }
  
  .input-field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 16px;
    color: #fff;
    padding: 8px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  
  .input-field::placeholder {
    color: transparent;
  }
  
  .input-field:placeholder-shown ~ .input-label {
    font-size: 16px;
    top: 20px;
  }
  
  .input-label {
    position: absolute;
    top: 0;
    color: #9b9b9b;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    pointer-events: none;
  }
  
  .input-field:focus {
    padding-bottom: 8px;
    border-bottom: 2px solid #496bff;
  }
  
  .input-field:focus ~ .input-label {
    position: absolute;
    top: 0;
    color: #496bff;
    display: block;
    transition: 0.3s;
    font-size: 16px;
    font-weight: 800;
  }
`;
