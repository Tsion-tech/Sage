import React from "react";

const ButtonBox = ({ children }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default ButtonBox;