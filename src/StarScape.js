import React from "react";

// ripped off from https://freefrontend.com/css-animated-backgrounds/
// https://codepen.io/agoodwin/pen/NMJoER

import { useSpring, animated } from "react-spring";

const StarScape = ({ onMobile }) => {
  const [{ x }] = useSpring(() => ({
    loop: !onMobile,

    from: { x: 0 },
    to: { x: 2 * Math.PI },
    config: { duration: 60000 },
  }));

  return (
    <div style={{ zIndex: 9996 }}>
      <div class="twinkling"></div>
      <animated.div
        class="starImg"
        style={{
          backgroundPosition: onMobile
            ? `${Math.random() * 100}% ${Math.random() * 100}%`
            : x.to((x) => `${Math.cos(x) * 100}% ${Math.sin(x) * 100}%`),
        }}
      ></animated.div>
    </div>
  );
};

export default StarScape;
