import "./ButtonComponent.css";
import { useState } from "react";

const Button = () => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <button
      className="btn__expand"
      onClick={() => setIsExpand((expand) => !expand)}
    >
      <p className="btn__expand-text">{isExpand ? "Less" : "More"}</p>

      {!isExpand ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="btn__arrow"
        >
          <circle cx="16" cy="16" r="16" fill="#303030" />
          <path
            d="M11.2 13.6001L16 18.4001L20.8 13.6001"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="btn__arrow"
        >
          <circle cx="16" cy="16" r="16" fill="#303030" />
          <path
            d="M11.2 18.3999L16 13.5999L20.8 18.3999"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
