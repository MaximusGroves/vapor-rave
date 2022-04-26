import React from "react";
import Logo from "./Logo";

import { useSpring, animated, easings } from "react-spring";

const reactBlue = "#61DAFB";

const Sunset = ({ horizon, horizonNudge, textNudge }) => {
  const [{ fill }] = useSpring(() => ({
    from: { fill: reactBlue },
    to: { fill: "#000000" },
    loop: { reverse: true },
    config: { duration: 10000, easing: easings.easeInOutQuart },
  }));

  return (
    <div
      style={
        {
          // width: "100%",
          // height: "100%",
          // transform: "translate(-50%, -50%)",
        }
      }
    >
      <div
        style={{
          zIndex: 0,
          position: "absolute",
          top: horizon - horizonNudge,
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.7,
          filter:
            "drop-shadow(10px 10px 900px rgba(255,255,0,0.3)) drop-shadow(10px 10px 90px #ff0) drop-shadow(-10px -10px 25px #ff0)",
        }}
      >
        <svg width={1000} height={1000}>
          <circle cx={500} cy={500} r={200} fill="#ff0" stroke="#ff0" />
        </svg>
      </div>
      <animated.div
        style={{
          position: "absolute",
          top: horizon - horizonNudge,
          left: "50%",
          transform: "translate(-50%, -50%)",
          fill: fill,
        }}
      >
        <Logo
          className="App-logo"
          // fill={"#61DAFB"}
          //   fill={"#000"}
        />
      </animated.div>
      <div
        style={{
          position: "absolute",
          transform: "translateX(-50%)",
          top: horizon - horizonNudge + textNudge,
        }}
      >
        <p>Edit src/App.js and save to reload.</p>
        <a
          class="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
};

export default Sunset;
