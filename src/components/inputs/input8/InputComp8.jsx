import './InputComp8.css';

export const InputComp8 = () => {
  return (
    <div className="input8">
        <input className="input8__input" type="text" placeholder="" />
        <label className="input8__label">First Name</label>
        <span className="input8__border-focus">
            <i className="border-focus__left-right"></i>
        </span>
    </div>
  );
};


export const InputComp8JSX = `
export const InputComp8 = () => {
  return (
    <div className="input8">
        <input className="input8__input" type="text" placeholder="" />
        <label className="input8__label">First Name</label>
        <span className="input8__border-focus">
            <i className="border-focus__left-right"></i>
        </span>
    </div>
  );
};
`;

export const InputComp8CSS = `
.input8__input:focus {
  outline: none;
}

.input8 {
  position: relative;
  width: 100%;
}

.input8__input {
  color: #fdfdfd;
  border: 2px solid #ccc;
  padding: 8px;
  transition: 0.4s;
  background: transparent;
}

.input8__input ~ .input8__border-focus:before,
.input8__input ~ .input8__border-focus:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #d800a2;
  transition: 0.6s;
}

.input8__input ~ .input8__border-focus:after {
  top: auto;
  bottom: 0;
  left: auto;
  right: 0;
}

.input8__input ~ .input8__border-focus .border-focus__left-right:before,
.input8__input ~ .input8__border-focus .border-focus__left-right:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 0;
  background-color: #d800a2;
  transition: 0.6s;
}

.input8__input ~ .input8__border-focus .border-focus__left-right:after {
  left: auto;
  right: 0;
  top: auto;
  bottom: 0;
}

.input8__input:focus ~ .input8__border-focus:before,
.input8__input:focus ~ .input8__border-focus:after {
  width: 100%;
  transition: 0.3s;
}

.input8__input:focus ~ .input8__border-focus .border-focus__left-right:before,
.input8__input:focus ~ .input8__border-focus .border-focus__left-right:after {
  height: 100%;
  transition: 0.4s;
}

.input8__input ~ .input8__label {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 12px;
  pointer-events: none;
  width: 100%;
  color: #aaa;
  transition: 0.3s;
  z-index: 1;
}

.input8__input:focus ~ .input8__label {
  color: #d800a2;
}
`;