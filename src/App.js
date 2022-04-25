// import logo from "./logo.svg";
// import Logo from "./Logo";
import Sunset from "./Sunset";
import "./App.css";
import React from "react";
import useWindowSize from "./useWindowSize";
//import HorizLines from "./HorizLines";
// import HorizAnim from "./HorizAnim";
import HorizAnimGroup from "./HorizAnimGroup";
import VertLines from "./VertLines";
import SpotifyPlayer from "react-spotify-player";
import GithubIcon from "./GithubIcon";
// import SVG from "react-inlinesvg";

function App() {
  const windowSize = useWindowSize();

  const screenWidth = windowSize.width || window.innerWidth;
  const screenHeight = windowSize.height || window.innerHeight;

  const horizon =
    screenHeight >= 1400 ? screenHeight - 1400 * 0.45 : screenHeight * 0.55;

  const horizonNudge = 60;

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
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: 9999 }}>
          <a
            href="https://github.com/MaximusGroves/vapor-rave"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
        <div style={{ position: "absolute", top: 0, right: 0, zIndex: 9998 }}>
          <SpotifyPlayer
            uri="spotify:playlist:37i9dQZF1DXdLEN7aqioXM?si=7b081c1ccf4a4b5d"
            size={{ width: 300, height: 80 }}
            view={"list"} //or coverart
            theme={"black"}
          />
        </div>
      </header>
      <body>
        <Sunset horizon={horizon} horizonNudge={horizonNudge} />

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
      </body>
    </div>
  );
}

export default App;
