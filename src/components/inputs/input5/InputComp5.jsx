import React, { useEffect, useRef } from 'react';
import './InputComp5.css';

export const InputComp5 = () => {
  const rangeRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const rangeInput = rangeRef.current;
    const rangeBubble = bubbleRef.current;

    const updateBubble = () => {
      const { min, max, value } = rangeInput;
      const total = Number(max) - Number(min);
      const perc = (Number(value) - Number(min)) / total;

      rangeBubble.style.left = `${perc * 100}%`;
      rangeBubble.style.transform = `translateX(-${perc * 100}%)`;
      rangeBubble.textContent = value;
    };

    updateBubble();

    rangeInput.addEventListener('input', updateBubble);

    return () => {
      rangeInput.removeEventListener('input', updateBubble);
    };
  }, []);

  return (
    <label className="input5">
      <input
        className="input5__input"
        type="range"
        defaultValue="0"
        max="100"
        min="0"
        ref={rangeRef}
      />
      <span className="input5__bubble" ref={bubbleRef}></span>
    </label>
  );
};


export const InputComp5JSX = `
export const InputComp5 = () => {
  const rangeRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const rangeInput = rangeRef.current;
    const rangeBubble = bubbleRef.current;

    const updateBubble = () => {
      const { min, max, value } = rangeInput;
      const total = Number(max) - Number(min);
      const perc = (Number(value) - Number(min)) / total;

      rangeBubble.style.left = \`\${perc * 100}%\`;
      rangeBubble.style.transform = \`translateX(-\${perc * 100}%)\`;
      rangeBubble.textContent = value;
    };

    updateBubble();

    rangeInput.addEventListener('input', updateBubble);

    return () => {
      rangeInput.removeEventListener('input', updateBubble);
    };
  }, []);

  return (
    <label className="input5">
      <input
        className="input5__input"
        type="range"
        defaultValue="0"
        max="100"
        min="0"
        ref={rangeRef}
      />
      <span className="input5__bubble" ref={bubbleRef}></span>
    </label>
  );
};
`;

export const InputComp5CSS = `
.input5__input {
  display: block;
  position: relative;
  outline: none;
  appearance: none;
  cursor: pointer;
  border-radius: 3px;
}

.input5__input::before,
.input5__input::after {
  position: absolute;
  display: inline-block;
  top: -5px;
}

.input5__input::before {
  content: attr(min);
  left: 0;
  transform: translateX(calc(-100% - 5px));
}

.input5__input::after {
  content: attr(max);
  right: 0;
  transform: translateX(calc(100% + 5px));
}

.input5__input::-webkit-slider-runnable-track {
  background-color: #ddd;
  height: 5px;
  border-radius: 3px;
  appearance: none;
}

.input5__input::-webkit-slider-thumb {
  background-color: #0097f0;
  width: 6px;
  height: 20px;
  border-radius: 3px;
  appearance: none;
  margin: -7px 0 0 0;
}

.input5 {
  position: relative;
}

.input5__bubble {
  background-color: #0097f0;
  color: #fff;
  position: absolute;
  left: 0;
  top: 18px;
  padding: 5px 7px;
  border-radius: 3px;
  z-index: 999;
  display: none;
}

.input5__input:hover+.input5__bubble,
.input5__input:focus+.input5__bubble {
  display: inline-block;
}
`;