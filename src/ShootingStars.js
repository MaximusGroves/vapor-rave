import React from "react";

// ripped off from https://freefrontend.com/css-animated-backgrounds/
// https://codepen.io/alphardex/pen/RwrVoeL

const ShootingStars = ({ total, screenWidth, horizon }) => {
  return (
    <>
      {[...Array(total).keys()].map((val) => {
        
        const startPos = (Math.random() * 2 - 0.5) * screenWidth;
        const distance = Math.abs(startPos - screenWidth / 2);

        const rad = Math.atan((screenWidth / 2 - startPos) / horizon);

        return (
          <div
            style={{
              position: "absolute",
              top: 0,
              transform: `rotate(${-rad}rad)`,
              left: `${startPos}px`,
            }}
          >
            <div
              class="star"
              style={{
                "--star-tail-length": `${
                  Math.random() * 4 + 1.5 + +distance / 500
                }em`,
                "--fall-duration": `${Math.random() * 6 + 10}s`,
                "--fall-delay": `${Math.random() * 10}s`,
              }}
            />
          </div>
        );
      })}
      ;
    </>
  );
};

export default ShootingStars;
