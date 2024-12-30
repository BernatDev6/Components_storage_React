import React from 'react';
import './CardComp3.css'

export const CardComp3 = () => {

    const tags = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'PHP', 'Laravel', 'MySQL'
    ];

    const repeatedTags = Array(4).fill(tags).flat();

    return (
        <div className="card3">
            <ul className="tag-list card3__inner">
                {repeatedTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export const CardComp3JSX = `
export const CardComp3 = () => {

    const tags = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'PHP', 'Laravel', 'MySQL'
    ];

    const repeatedTags = [...tags, ...tags, ...tags, ...tags];

    return (
        <div className="card3">
            <ul className="tag-list card3__inner">
                {repeatedTags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};
`;

export const CardComp3CSS = `
.card3 {
    overflow: hidden;
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.card3__inner {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card3 .card3__inner {
    width: max-content;
    flex-wrap: nowrap;
    will-change: transform;
    animation: scroll var(--_animation-duration, 10s) linear infinite;
    animation-play-state: running;
}

.card3:hover .card3__inner {
    animation-play-state: paused;
}

@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}

.tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
}

.tag-list li {
    padding: 1rem;
    background: #37485f;
    border-radius: 0.5rem;
}

@media (max-width: 768px) {
    .card3 {
        width: 300px;
    }
}
`;