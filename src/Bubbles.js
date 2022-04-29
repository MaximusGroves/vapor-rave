import React from "react";

// ripped off from https://freefrontend.com/css-animated-backgrounds/
// https://codepen.io/tonkotsuboy/pen/zJbKNN

const Bubbles = () => (
  <div
    className="container"
    style={{
      zIndex: 9998,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    {[...Array(100).keys()].map((val) => (
      <div className="circle-container">
        <div className="circle"></div>
      </div>
    ))}
  </div>
);

export default Bubbles;
