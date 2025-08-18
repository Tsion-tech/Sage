import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "320px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#22252d",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      {children}
      
    </div>
  );
};

export default Wrapper;
