import { Svg, Line } from "react-svg-path";
import "./App.css";
import React from "react";
import { useSpring, animated } from "react-spring";

const HorizAnim = ({ width, height, horizon, start = 0, duration = 1000 }) => {
  const logYFunc = (val) => 150 * Math.log(val * 7) + (50 - val) * 2;
  const at40 = logYFunc(39);

  const posFunction = (val) => at40 - logYFunc(val);

  const glowColor = "#ff00ff";

  const colors = useSpring({
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
  });

  const [{ x }] = useSpring(() => ({
    loop: start === 0,
    reset: true,
    to: { x: 0 },
    from: { x: start ? start : 39 },
    config: { duration: start ? (duration * start) / 40 : duration },
    onRest: (result, ctrl) => {
      if (ctrl.springs.x.animation.config.duration !== duration) {
        ctrl.start({
          loop: true,
          to: { x: 0 },
          from: { x: 39 },
          x: 39,
          config: { duration: duration },
        });
      }
    },
  }));

  return (
    <div style={{ position: "absolute", top: horizon, left: 0 }}>
      <animated.div
        style={{
          transform: x.to((x) => `translateY(${posFunction(x)}px)`),
          strokeWidth: x.to((x) => `${(39 - x) / 10}`),
          filter: x.to(
            (x) => `
              drop-shadow(${-x / 5}px ${x / 5}px ${x * 2}px ${glowColor})
              drop-shadow(-${x / 5}px ${x / 5}px ${x}px ${glowColor})
              `
          ),
        }}
      >
        <animated.div style={colors}>
          <Svg width={width} height={height}>
            <Line sy={0} ey={0} sx={0} ex={width || 0} />
          </Svg>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default HorizAnim;
