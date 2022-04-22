import logo from "./logo.svg";
import "./App.css";
import React from "react";
import useWindowSize from "./useWindowSize";
//import HorizLines from "./HorizLines";
// import HorizAnim from "./HorizAnim";
import HorizAnimGroup from "./HorizAnimGroup";
import VertLines from "./VertLines";

function App() {
  const windowSize = useWindowSize();

  const screenWidth = windowSize.width || window.innerWidth;
  const screenHeight = windowSize.height || window.innerHeight;

  const horizon =
    screenHeight >= 1400 ? screenHeight - 1400 * 0.45 : screenHeight * 0.55;

  return (
    <div
      className="App"
      style={{
        width: windowSize.width,
        height: windowSize.height,
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VertLines
          width={screenWidth}
          height={screenHeight}
          horizon={horizon}
        />

        <HorizAnimGroup
          width={screenWidth}
          height={screenHeight}
          horizon={horizon}
          duration={15000}
          total={22}
        />
      </header>
    </div>
  );
}

export default App;
