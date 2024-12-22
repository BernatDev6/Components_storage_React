import React from 'react';
import './CardComp7.css'

export const CardComp7 = () => {
    return (
        <div className="card7">
            <img src="https://picsum.photos/500" className="card7__image" />
            <div className="card7__overlay">
                <div className="overlay__text">
                    <h3>Hover card 7</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit quaerat autem sapiente quasi asperiores?</p>
                    <a href="#" className="text__button">View card</a>
                </div>
            </div>
        </div>
    );
};

export const CardComp7JSX = `
export const CardComp7 = () => {
    return (
        <div className="card7">
            <img src="https://picsum.photos/500" className="card7__image" />
            <div className="card7__overlay">
                <div className="overlay__text">
                    <h3>Hover card 7</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit quaerat autem sapiente quasi asperiores?</p>
                    <a href="#" className="text__button">View card</a>
                </div>
            </div>
        </div>
    );
};
`;

export const CardComp7CSS = `
.card7 {
    position: relative;
    background: none;
    width: 300px;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
    transition: all .5s ease-in;
}

.card7__image {
  display: block;
  width: auto;
  height: 100%;
  object-position: center;
}

.card7__overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: .5s ease;
  background-color: #393839be;
}

.card7:hover .card7__overlay {
  opacity: 1;
}

.overlay__text {
  color: white;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  padding: 20px;
  text-align: center;
}

.text__button {
  background-color: #fff;
  padding: .5rem 1rem;
  border-radius: 50px;
  margin-top: 2rem;
  display: inline-block;
  color: #000;
  text-decoration: none;
}
`;