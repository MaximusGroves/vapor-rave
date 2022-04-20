import logo from "./logo.svg";
import { Svg, Line } from "react-svg-path";
import "./App.css";
import React from "react";

function App() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const horizon = screenHeight * 0.55;
  const midWidth = screenWidth * 0.5;

  const horizTotal = 40;
  const vertHalf = 25;

  const logYFunc = (val) => 150 * Math.log(val * 7) + (50 - val) * 2;

  const logTopFunc = (val) => 200 * Math.log(val + 2);
  const logBottomFunc = (val) => 4000 * Math.log(val + 2);

  const lineYArray = [...Array(horizTotal).keys()]
    .reverse()
    .map((val) => logYFunc(val));
  const at50 = lineYArray[0];

  const topXArray = [...Array(vertHalf).keys()].map((val) => logTopFunc(val));
  const bottomXArray = [...Array(vertHalf).keys()].map((val) =>
    logBottomFunc(val)
  );
  const at20Top = logTopFunc(vertHalf);
  const at20Bottom = logBottomFunc(vertHalf);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Svg width={screenWidth} height={screenHeight}>
          {/* <Line
            sy={horizon + 5}
            ey={screenHeight}
            sx={midWidth + 100}
            ex={screenWidth}
            strokeWidth={1}
            filter={`drop-shadow(${10}px ${10}px ${200}px #ff00ff) drop-shadow(-${10}px -${10}px ${50}px #ff00ff)`}
          />
          <Line
            sy={horizon + 5}
            ey={screenHeight}
            sx={midWidth - 100}
            ex={0}
            strokeWidth={1}
            filter={`drop-shadow(${10}px ${10}px ${200}px #ff00ff) drop-shadow(-${10}px -${10}px ${50}px #ff00ff)`}
          /> */}

          {topXArray.map((val, idx) => (
            <Line
              sy={horizon + 5 - idx / 3}
              ey={screenHeight}
              sx={midWidth + at20Top - val}
              ex={midWidth + at20Bottom - bottomXArray[idx]}
              strokeWidth={`1/${idx + 1}px`}
              filter={`drop-shadow(${10}px ${10}px ${200}px #ff00ff) drop-shadow(-${10}px -${10}px ${50}px #ff00ff)`}
            />
          ))}
          {topXArray.map((val, idx) => (
            <Line
              sy={horizon + 5 - idx / 3}
              ey={screenHeight}
              sx={midWidth - at20Top + val}
              ex={midWidth - at20Bottom + bottomXArray[idx]}
              strokeWidth={`1/${idx + 1}px`}
              filter={`drop-shadow(${10}px ${10}px ${200}px #ff00ff) drop-shadow(-${10}px -${10}px ${50}px #ff00ff)`}
            />
          ))}
          <Line
            sy={horizon - 1}
            ey={screenHeight}
            sx={midWidth}
            ex={midWidth}
            strokeWidth={1}
            filter={`drop-shadow(${10}px ${10}px ${200}px #ff00ff) drop-shadow(-${10}px -${10}px ${50}px #ff00ff)`}
          />

          {lineYArray.map((val, idx) => (
            <Line
              sy={horizon + at50 - val}
              ey={horizon + at50 - val}
              sx={0}
              ex={screenWidth}
              strokeWidth={idx / 10}
              filter={`drop-shadow(${(horizTotal - idx) / 5}px ${
                (horizTotal - idx) / 5
              }px ${(horizTotal - idx) * 4}px #ff00ff) drop-shadow(-${
                (horizTotal - idx) / 5
              }px -${(horizTotal - idx) / 5}px ${horizTotal - idx}px #ff00ff)`}
            />
          ))}
        </Svg>
      </header>
    </div>
  );
}

export default App;
