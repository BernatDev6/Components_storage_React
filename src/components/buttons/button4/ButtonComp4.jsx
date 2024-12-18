import React, { useState } from "react";
import "./ButtonComp4.css";

export const ButtonComp4 = () => {
  const [liked, setLiked] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setBouncing(true);

    setTimeout(() => {
      setBouncing(false);
    }, 300);
  };

  return (
    <div onClick={toggleLike} className="button4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={liked ? "red" : "none"}
        stroke="red"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`heart ${bouncing ? "bounce" : ""}`}
      >
        <path d="M12 21L10.55 19.72C6 15.36 3 12.28 3 8.5C3 6.42 4.42 5 6.5 5C7.74 5 8.92 5.54 9.65 6.46L12 9.1L14.35 6.46C15.08 5.54 16.26 5 17.5 5C19.58 5 21 6.42 21 8.5C21 12.28 18 15.36 13.45 19.72L12 21Z" />
      </svg>
    </div>
  );
};

export const ButtonComp4JSX = `
export const ButtonComp4 = () => {
  const [liked, setLiked] = useState(false);
  const [bouncing, setBouncing] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setBouncing(true);

    setTimeout(() => {
      setBouncing(false);
    }, 300);
  };

  return (
    <div onClick={toggleLike} className="button4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={liked ? "red" : "none"}
        stroke="red"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`heart \${bouncing ? 'bounce' : ''}\`}
      >
        <path d="M12 21L10.55 19.72C6 15.36 3 12.28 3 8.5C3 6.42 4.42 5 6.5 5C7.74 5 8.92 5.54 9.65 6.46L12 9.1L14.35 6.46C15.08 5.54 16.26 5 17.5 5C19.58 5 21 6.42 21 8.5C21 12.28 18 15.36 13.45 19.72L12 21Z" />
      </svg>
    </div>
  );
};
`;

export const ButtonComp4CSS = `
.button4 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
}

.heart {
  width: 50px;
  height: 50px;
  transition: fill 0.3s ease;
}

.heart.bounce {
  animation: pump 0.3s ease-in-out;
}

@keyframes pump {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
`;