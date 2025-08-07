import React, { useEffect, useState, useRef } from 'react';

function Card() {
  const [counter, setCounter] = useState(0);
  const render = useRef(0);

  useEffect(function () {
    render.current += 1;
    console.log("render.current =", render.current, "from Card");
  });

  return (
    <div
      style={{
        width: "200px",
        height:"150px",
        boxShadow:"3px 3px 4px red",
        // border: "3px solid red", 
        padding: "5px",
        // display: "inline-block",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          
        //   backgroundColor:"gray",
          padding: "5px"
        }}
      >
        <h1 style={{ margin: "5px 0" }}>useRef  {/* {render.current}  */}</h1> 
        <button onClick={() => setCounter(counter + 1)}>add</button>
        <p style={{ margin: "5px 0" }}> wrerttfghgjkjklkjkhjghfgfgfdfdtjgjkjoikjhgffdweetryyu </p>
      </div>
    </div>
  );
}

export default Card;
