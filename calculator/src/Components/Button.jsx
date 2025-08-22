import React from "react";

const Button = ({ value, onClick, className }) => {
  return (
    <button
      onClick={() => onClick(value)} 
      className={className}
      style={{
        height: "60px",
        borderRadius: "8px",
        border: "none",
        fontSize: "1.2rem",
        cursor: "pointer",
        background: value === "=" ? "#f76c6c" : "#393e46",
        color: "#fff",
        gridColumn: value === "=" ? "span 2" : "span 1",
      }}
    >
      {value}
    </button>
  );
};

export default Button;
