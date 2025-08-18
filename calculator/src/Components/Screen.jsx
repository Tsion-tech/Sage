import React from "react";

const Screen = ({ value,history }) => {
  return (
  
    <div className="history"
      style={{
        height: "80px",
        marginBottom: "10px",
        background: "#000",
        color: "#fff",
        fontSize: "2rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 10px",
        borderRadius: "8px",
      }}
    >
       
       
      {value}
      
    </div>
   
    
  );
};

export default Screen;
