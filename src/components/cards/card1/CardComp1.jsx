import React from 'react';
import './CardComp1.css'

export const CardComp1 = () => {
  return (
    <>
        <div className="card1">
            <div className="image-wrapper">
                <img src="https://picsum.photos/300" className="card-image" alt="Card image" />
            </div>
            <div className="card-info">
                <a href="#">Card title</a>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam fuga distinctio placeat id esse sunt neque, dolore doloribus.
                </p>
            </div>
            <div className="card-button">
                <button>
                    Click
                </button>
            </div>
        </div>
    </>
  );
};

export const CardComp1JSX = `
<>
    <div className="card1">
        <div className="image-wrapper">
            <img src="https://picsum.photos/300" className="card-image" alt="Card image" />
        </div>
        <div className="card-info">
            <a href="#">Card title</a>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam fuga distinctio placeat id esse sunt neque, dolore doloribus.
            </p>
        </div>
        <div className="card-button">
            <button>
                Click
            </button>
        </div>
    </div>
</>
`;

export const CardComp1CSS = `
.card1 {
    background-color: #eeeeee;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
    text-align: left;
    cursor: pointer;
    width: 260px;
    color: #070707;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
}

.card1 .image-wrapper {
    overflow: hidden;
    border-radius: 8px;
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card1 .card-image {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
}

.card1:hover .card-image {
    transform: scale(1.2);
}

.card-info {
    margin-top: 8px;
}

.card-info a {
    color: #070707;
    font-size: 20px;
}

.card-info p {
    font-size: 14px;
}

.card-button button {
    background: linear-gradient(#1323ff, #6771fd);
    color: #fafafa;
    padding: 12px 16px;
    font-size: 14px;
    border-radius: 8px;
    border: none;
    letter-spacing: 0.1em;
    cursor: pointer;
}

.card-button button:active {
    transform: scale(0.96);
}
`;
