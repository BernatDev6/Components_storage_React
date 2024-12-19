import React from 'react';
import './CardComp5.css'

export const CardComp5 = () => {
    return (
        <article class="card5">
            <img src="https://picsum.photos/500" alt="image" class="card5__img" />

            <div class="card5__data">
                <h2 class="card5__title">Card5 Hover</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#" class="card5__button">Read More</a>
            </div>
        </article>
    );
};

export const CardComp5JSX = `
export const CardComp5 = () => {
    return (
        <article class="card5">
            <img src="https://picsum.photos/500" alt="image" class="card5__img" />

            <div class="card5__data">
                <h2 class="card5__title">Card5 Hover</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <a href="#" class="card5__button">Read More</a>
            </div>
        </article>
    );
};
`;

export const CardComp5CSS = `
.card__article {
    position: relative;
    overflow: hidden;
}

.card__img {
    width: 300px;
    height: 300px;
    border-radius: 1.5rem;
}

.card__data {
    width: 270px;
    background-color: #fcfcfc;
    padding: 1rem;
    border-radius: 1rem;
    position: absolute;
    bottom: -9rem;
    left: 0;
    right: 0;
    margin-inline: auto;
    opacity: 0;
    transition: opacity 1s 1s;
}

.card__title {
    font-size: 20px;
    color: #000;
}

.card__button {
    text-decoration: none;
    color: #000;
}

.card__button:hover {
    text-decoration: underline;
}

.card__article:hover .card__data {
    animation: show-data 1s forwards;
    opacity: 1;
    transition: opacity .3s;
}

.card__article:hover {
    animation: remove-overflow 2s forwards;
}

.card__article:not(:hover) {
    animation: show-overflow 2s forwards;
}

.card__article:not(:hover) .card__data {
    animation: remove-data 1s forwards;
}

@keyframes show-data {
    50% {
        transform: translateY(-10rem);
    }
    100% {
        transform: translateY(-7rem);
    }
}

@keyframes remove-overflow {
    to {
        overflow: initial;
    }
}

@keyframes remove-data {
    0% {
        transform: translateY(-7rem);
    }
    50% {
        transform: translateY(-10rem);
    }
    100% {
        transform: translateY(5rem);
    }
}

@keyframes show-overflow {
    0% {
        overflow: initial;
        pointer-events: none;
    }
    50% {
        overflow: hidden;
    }
}
`;