import { Svg, Line } from "react-svg-path";
import "./App.css";
import React from "react";
import { useSpring, animated } from "react-spring";

const HorizLines = ({ width, height, horizon }) => {
  const horizTotal = 40;

  const logYFunc = (val) => 150 * Math.log(val * 7) + (50 - val) * 2;

  const lineYArray = [...Array(horizTotal).keys()]
    .reverse()
    .map((val) => logYFunc(val));
  const at50 = lineYArray[0];

  const glowColor = "#ff00ff";

  const styles = useSpring({
    loop: true,
    to: [
      { stroke: "#ffffff" },
      { stroke: "#00ffff" },
      { stroke: "#ff00ff" },
      { stroke: "#ffff00" },
    ],
    from: { stroke: "#ffff00" },
    reset: true,
    config: { duration: 3000 },
  });

  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      <animated.div style={styles}>
        <Svg width={width} height={height}>
          {lineYArray.map((val, idx) => (
            <Line
              sy={horizon + at50 - val || 0}
              ey={horizon + at50 - val || 0}
              sx={0}
              ex={width || 0}
              strokeWidth={idx / 10}
              filter={`drop-shadow(${(horizTotal - idx) / 5}px ${
                (horizTotal - idx) / 5
              }px ${(horizTotal - idx) * 4}px ${glowColor}) 
              drop-shadow(-${(horizTotal - idx) / 5}px -${
                (horizTotal - idx) / 5
              }px ${horizTotal - idx}px ${glowColor}) 
              `}

              // filter="drop-shadow(10px 10px 200px #ff00ff) drop-shadow(-10px -10px 50px #ff00ff)"
            />
          ))}
        </Svg>
      </animated.div>
    </div>
  );
};

export default HorizLines;
