import React from 'react';
import './InputComp2.css'

export const InputComp2 = () => {
  return (
    <>
      <div className="input2">
        <input type="radio" value="5" />
        <label htmlFor="star5"></label>
        <input type="radio" value="4" />
        <label htmlFor="star4"></label>
        <input type="radio" value="3" />
        <label htmlFor="star3"></label>
        <input type="radio" value="2" />
        <label htmlFor="star2"></label>
        <input type="radio" value="1" />
        <label htmlFor="star1"></label>
      </div>
    </>
  );
};

export const InputComp2JSX = `
<>
  <div className="input2">
    <input type="radio" value="5" />
    <label htmlFor="star5"></label>
    <input type="radio" value="4" />
    <label htmlFor="star4"></label>
    <input type="radio" value="3" />
    <label htmlFor="star3"></label>
    <input type="radio" value="2" />
    <label htmlFor="star2"></label>
    <input type="radio" value="1" />
    <label htmlFor="star1"></label>
  </div>
</>
`;

export const InputComp2CSS = `
.input2 {
  display: flex;
  flex-direction: row-reverse;
}

.input2 input {
  display: none;
}

.input2 label {
  cursor: pointer;
  transition: color 0.3s;
}

.input2 label:before {
  content: "\\2605";
  font-size: 32px;
}

.input2 input:checked ~ label,
.input2 label:hover,
.input2 label:hover ~ label {
  color: #ffbc2a;
  transition: color 0.3s;
}
`;
