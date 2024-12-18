import React from 'react';
import './CardComp4.css'

export const CardComp4 = () => {
    return (
        <div className="card4">
            <div className='card4__top'>
                <img src="https://picsum.photos/100" alt="avatar image" />
                <div className="card4__nickname">
                    <strong>card4</strong>
                    <span>@card4.card</span>
                </div>
            </div>
            <p className='card4__bottom'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores error id magni aliquam fugiat voluptatum dolorem voluptatem officiis ullam architecto, quaerat assumenda nulla possimus similique et, at molestiae inventore.</p>
        </div>
    );
};

export const CardComp4JSX = `
export const CardComp4 = () => {
    return (
        <div className="card4">
            <div className='card4__top'>
                <img src="https://picsum.photos/100" alt="avatar image" />
                <div className="card4__nickname">
                    <strong>card4</strong>
                    <span>@card4.card</span>
                </div>
            </div>
            <p className='card4__bottom'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat asperiores error id magni aliquam fugiat voluptatum dolorem voluptatem officiis ullam architecto, quaerat assumenda nulla possimus similique et, at molestiae inventore.</p>
        </div>
    );
};
`;

export const CardComp4CSS = `
.card4 {
    max-width: 600px;
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 20px;
}

.card4__top {
    display: flex;
    margin-bottom: 8px;
}

.card4__top img {
    border-radius: 50%;
    height: 50px;
    margin-right: 8px;
}

.card4__nickname {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.card4__bottom {
    margin: 0;
}
`;