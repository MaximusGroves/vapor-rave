import { Svg, Line } from "react-svg-path";
import "./App.css";
import React from "react";
import { useSpring, animated } from "react-spring";

const Horizon = ({ width, height, horizon }) => {
  const glowColor = "#ff00ff";

  const [{ stroke }] = useSpring(() => ({
    loop: true,
    to: [
      // { stroke: "#ffffff" },
      { stroke: "#00ffff" },
      { stroke: "#ff00ff" },
      { stroke: "#ffff00" },
    ],
    from: { stroke: "#ffff00" },
    reset: true,
    config: { duration: 3000 },
  }));

  return (
    <div style={{ position: "absolute", top: horizon, left: 0 }}>
      <animated.div
        style={{
          //more transforms on desktop

          strokeWidth: "2px",
          filter: `
                  drop-shadow(${8}px ${8}px ${16}px ${glowColor})
                  drop-shadow(-${8}px ${8}px ${40}px ${glowColor})
                  drop-shadow(4px -5px 5px ${glowColor})
                  `,
          stroke: stroke,
          // stroke: "rgba(255,0,255,0.8)",
        }}
      >
        <Svg width={width} height={height}>
          <Line sy={0} ey={0} sx={0} ex={width || 0} />
        </Svg>
      </animated.div>
    </div>
  );
};

export default Horizon;
