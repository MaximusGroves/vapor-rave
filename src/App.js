import logo from "./logo.svg";
import "./App.css";
import React from "react";
import useWindowSize from "./useWindowSize";
//import HorizLines from "./HorizLines";
// import HorizAnim from "./HorizAnim";
import HorizAnimGroup from "./HorizAnimGroup";
import VertLines from "./VertLines";
import SpotifyPlayer from "react-spotify-player";

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
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <SpotifyPlayer
            uri="spotify:playlist:37i9dQZF1DXdLEN7aqioXM?si=7b081c1ccf4a4b5d"
            size={{ width: 300, height: 80 }}
            view={"list"} //or coverart
            theme={"black"}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
