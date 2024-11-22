import React from 'react';
import '../button1/ButtonComp1.css'

export const ButtonExample = () => {
  return (
    <button className="button-class">
      Hover Me!
    </button>
  );
};

export const buttonExampleJSX = `
export const ButtonExample = () => {
  return (
    <button className="button-class">
      Hover Me!
    </button>
  );
};
`;

export const buttonExampleCSS = `
.button-class {
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
.button-class:hover {
    color: #000;
}
.button-class::before {
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
.button-class:hover::before {
    width: 145%;
}
.button-class {
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
.button-class:hover {
    color: #000;
}
.button-class::before {
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
.button-class:hover::before {
    width: 145%;
}
.button-class {
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
.button-class:hover {
    color: #000;
}
.button-class::before {
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
.button-class:hover::before {
    width: 145%;
}
`;
