import React from 'react';
import '../button1/ButtonComp1.css'

export const ButtonComp1 = () => {
  return (
    <button className="button1">
      Hover Me!
    </button>
  );
};

export const ButtonComp1JSX = `
export const ButtonComp1 = () => {
  return (
    <button className="button1">
      Hover Me!
    </button>
  );
};
`;

export const ButtonComp1CSS = `
.button1 {
    font-size: 18px;
    overflow: hidden;
    background-color: #ffffff00;
    color: #fff;
    border: 1px solid #fff;
    padding: 0.75rem 1.5rem;
    position: relative;
    border-radius: 4px;
    transition: color 0.5s;
    z-index: 1;
}

.button1:hover {
    color: #000;
}

.button1::before {
    content: "";
    height: 110%;
    background-color: #fff;
    transform: skewX(-35deg);
    transition: width 0.5s;
    position: absolute;
    left: -30%;
    top: -4%;
    width: 0%;
    z-index: -1;
}

.button1:hover::before {
    width: 145%;
}
`;
