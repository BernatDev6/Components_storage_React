import React from 'react';
import './ButtonComp3.css'

export const ButtonComp3 = () => {
  return (
    <button className="button3">
        Start
    <div className="icon">
        <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
        ></path>
        </svg>
    </div>
    </button>
  );
};

export const ButtonComp3JSX = `
export const ButtonComp3 = () => {
  return (
    <button className="button3">
        Start
    <div className="icon">
        <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
        ></path>
        </svg>
    </div>
    </button>
  );
};
`;

export const ButtonComp3CSS = `
.button3 {
  background: linear-gradient(135deg, #9b2121, #fd6666);
  color: white;
  font-size: 18px;
  border-radius: 0.4em;
  border: none;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  position: relative;
  height: 2.8em;
  padding-left: 3.3em;
  padding-right: 1em;
  cursor: pointer;
}

.button3 .icon {
  background: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.3em;
  left: 0.2em;
  top: 0.3em;
  transition: all 0.3s;
}

.button3:hover .icon {
  width: calc(100% - 0.45em);
}

.button3 .icon svg {
  width: 1.1em;
  color: #9b2121;
}

.button3:active .icon {
  transform: scale(0.95);
}
`;
