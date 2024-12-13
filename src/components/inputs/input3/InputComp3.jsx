import React from 'react';
import './InputComp3.css'

export const InputComp3 = () => {
  return (
    <>
      <div className="input3">
        <input type="text" name="text" className="input" placeholder="Enter name" />
        <div className="highlight"></div>
      </div>
    </>
  );
};

export const InputComp3JSX = `
export const InputComp3 = () => {
  return (
    <>
      <div className="input3">
        <input type="text" name="text" className="input" placeholder="Enter name" />
        <div className="highlight"></div>
      </div>
    </>
  );
};
`;

export const InputComp3CSS = `
.input3 {
  position: relative;
}

.input {
  font-size: 1em;
  padding: 0.6em 1em;
  border: none;
  border-radius: 6px;
  background-color: #464646;
  color: #f7f7f7;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input:focus {
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input::placeholder {
  color: #999;
}

.highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #00db25;
  transition: width 0.3s ease;
}

.input:focus + .highlight {
  width: 100%;
}
`;