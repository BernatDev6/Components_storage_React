import './InputComp7.css';

export const InputComp7 = () => {
  return (
    <>
      <input type="checkbox" id="switch" className="input7"/>
      <label htmlFor="switch" className="input7__label">Toggle</label>
    </>
  );
};


export const InputComp7JSX = `
export const InputComp7 = () => {
  return (
    <>
      <input type="checkbox" id="switch" className="input7"/>
      <label htmlFor="switch" className="input7__label">Toggle</label>
    </>
  );
};
`;

export const InputComp7CSS = `
.input7 {
	height: 0;
	width: 0;
	visibility: hidden;
}

.input7__label {
	position: relative;
	cursor: pointer;
	text-indent: -999px;
	width: 100px;
	height: 50px;
	background: grey;
	display: block;
	border-radius: 100px;
}

.input7__label:after {
	content: '';
	position: absolute;
	top: 4px;
	left: 4px;
	width: 42px;
	height: 42px;
	background: #ebebeb;
	border-radius: 90px;
	transition: 0.3s;
}

.input7:checked + .input7__label {
	background: #55daae;
}

.input7:checked + .input7__label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

.input7__label:active:after {
	width: 55px;
}
`;