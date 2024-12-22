import React from 'react';
import './InputComp4.css'

export const InputComp4 = () => {
  return (
    <div className="input4">
      <input placeholder="Name..." type="text" />
    </div>
  );
};

export const InputComp4JSX = `
export const InputComp4 = () => {
  return (
    <div className="input4">
      <input placeholder="Name..." type="text" />
    </div>
  );
};
`;

export const InputComp4CSS = `
.input4 {
  display: flex;
  background: white;
  border-radius: 1rem;
  background: linear-gradient(173deg, #23272f 0%, #14161a 100%);
  padding: 0.2rem;
  gap: 0.2rem;
}

.input4 input {
  border-radius: 0.8rem;
  background: #23272f;
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  flex-basis: 100%;
  padding: 1rem;
  border: 1px solid transparent;
  color: white;
  transition: all 0.2s ease-in-out;
}

.input4 input:focus {
  border: 1px solid #3bff3b;
  outline: none;
  box-shadow: 0px 0px 15px #3bff4580;
}

@media (max-width: 500px) {
  .input4 {
    flex-direction: column;
  }

  .input4 input {
    border-radius: 0.8rem;
  }
}
`;