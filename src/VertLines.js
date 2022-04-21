import { Svg, Line } from "react-svg-path";
import "./App.css";
import React from "react";
import { useSpring, animated } from "react-spring";

const VertLines = ({ width, height, horizon }) => {
  const midWidth = width / 2 || window.innerWidth / 2;

  const vertHalf = 25;
  const vertOffset = 3;

  const logTopFunc = (val) => 200 * Math.log(val + 2);
  const logBottomFunc = (val) => 4000 * Math.log(val + 2);

  const topXArray = [...Array(vertHalf).keys()].map((val) => logTopFunc(val));
  const bottomXArray = [...Array(vertHalf).keys()].map((val) =>
    logBottomFunc(val)
  );
  const at20Top = logTopFunc(vertHalf);
  const at20Bottom = logBottomFunc(vertHalf);

  // const glowColor = "#ff00ff";

  const styles = useSpring({
    loop: true,
    to: [
      { stroke: "#00ffff" },
      { stroke: "#ff00ff" },
      { stroke: "#ffff00" },
      { stroke: "#ffffff" },
    ],
    config: { duration: 2000 },
  });

  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      <animated.div style={styles}>
        <Svg width={width} height={height}>
          {topXArray.map((val, idx) => {
            const strokeWidth = `1/${idx + 1}px`;
            return (
              <>
                <Line
                  sy={horizon + 5 - idx / 3 + vertOffset || 0}
                  ey={height || 0}
                  sx={midWidth + at20Top - val || 0}
                  ex={midWidth + at20Bottom - bottomXArray[idx] || 0}
                  strokeWidth={strokeWidth}
                  // filter={`drop-shadow(${10}px ${10}px ${200}px ${glowColor}) drop-shadow(-${10}px -${10}px ${50}px ${glowColor})`}
                />
                <Line
                  sy={horizon + 5 - idx / 3 + vertOffset || 0}
                  ey={height || 0}
                  sx={midWidth - at20Top + val || 0}
                  ex={midWidth - at20Bottom + bottomXArray[idx] || 0}
                  strokeWidth={strokeWidth}
                  // filter={`drop-shadow(${10}px ${10}px ${200}px ${glowColor}) drop-shadow(-${10}px -${10}px ${50}px ${glowColor})`}
                />
              </>
            );
          })}

          <Line
            sy={horizon - 2 + vertOffset}
            ey={height}
            sx={midWidth}
            ex={midWidth}
            strokeWidth={1}
            // filter={`drop-shadow(${10}px ${10}px ${200}px ${glowColor}) drop-shadow(-${10}px -${10}px ${50}px ${glowColor})`}
          />
        </Svg>
      </animated.div>
    </div>
  );
};

export default VertLines;
