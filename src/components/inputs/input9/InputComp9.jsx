import './InputComp9.css';

export const InputComp9 = () => {
  return (
    <label class="input9">
        <input type="checkbox" className="input9__input"/>
        <span class="input9__slider"></span>
    </label>
  );
};


export const InputComp9JSX = `
export const InputComp9 = () => {
  return (
    <label class="input9">
        <input type="checkbox" className="input9__input"/>
        <span class="input9__slider"></span>
    </label>
  );
};
`;

export const InputComp9CSS = `
.input9 {
  font-size: 20px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

.input9__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.input9__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffae00;
  transition: .6s;
  border-radius: 30px;
}

.input9__slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 16%;
  box-shadow: inset 15px -4px 0px 15px #fff000;
  transition: .6s;
}

.input9__input:checked + .input9__slider {
  background-color: #28096b;
}

.input9__input:checked + .input9__slider:before {
  transform: translateX(100%);
  box-shadow: inset 8px -4px 0px 0px #c0c0c0;
}
`;