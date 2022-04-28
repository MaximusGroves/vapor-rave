import React from "react";

import GithubIcon from "./GithubIcon";
import SpotifyPlayer from "react-spotify-player";
import PerformanceSwitch from "./PerformanceSwitch";

const HeaderStuff = ({ onMobile, setSearchParams }) => (
  <div className="App-header">
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
        display: "block",
      }}
    >
      <a
        href="https://github.com/MaximusGroves/vapor-rave"
        target="_blank"
        rel="noreferrer"
        style={{ display: "block" }}
      >
        <GithubIcon />
      </a>

      <PerformanceSwitch
        onMobile={onMobile}
        setSearchParams={setSearchParams}
      />
    </div>

    <div style={{ position: "absolute", top: 0, right: 0, zIndex: 9998 }}>
      <SpotifyPlayer
        uri="spotify:playlist:37i9dQZF1DXdLEN7aqioXM?si=7b081c1ccf4a4b5d"
        size={{ width: 300, height: 80 }}
        view={"list"} //or coverart
        theme={"black"}
      />
    </div>
  </div>
);

export default HeaderStuff;
