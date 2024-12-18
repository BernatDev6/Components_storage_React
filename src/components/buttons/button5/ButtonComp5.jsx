import React from "react";
import "./ButtonComp5.css";

export const ButtonComp5 = () => {
  return (
    <button className="button5" type="button">
      <span className="button5__text">Download</span>
      <span className="button5__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="button5__svg">
        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
        <path d="M31.436,34.063H3.564A3.318,3.318,
        0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,
        0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,
        0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,
        3.318,0,0,1,31.436,34.063Z"></path></svg></span>
    </button>
  );
};

export const ButtonComp5JSX = `
export const ButtonComp5 = () => {
  return (
    <button className="button5" type="button">
      <span className="button5__text">Download</span>
      <span className="button5__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="button5__svg">
        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
        <path d="M31.436,34.063H3.564A3.318,3.318,
        0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,
        0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,
        0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,
        3.318,0,0,1,31.436,34.063Z"></path></svg></span>
    </button>
  );
};
`;

export const ButtonComp5CSS = `
.button5 {
  position: relative;
  width: 160px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid #323232;
  background-color: #eee;
  border-radius: 8px;
  overflow: hidden;
}

.button5, .button5__icon, .button5__text {
  transition: all 0.3s;
}

.button5 .button5__text {
  transform: translateX(14px);
  color: #a00000;
  font-weight: 600;
}

.button5 .button5__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 42px;
  background-color: #a00000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button5 .button5__svg {
  width: 20px;
  fill: #eee;
}

.button5:hover {
  background: #eee;
}

.button5:hover .button5__text {
  color: transparent;
}

.button5:hover .button5__icon {
  width: 160px;
  transform: translateX(-7px);
}

.button5:active {
  transform: scale(0.95);
}
`;