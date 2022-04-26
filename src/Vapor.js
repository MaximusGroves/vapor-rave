// import logo from "./logo.svg";
// import Logo from "./Logo";
import Sunset from "./Sunset";
import "./App.css";
import "./stars.css";
import React from "react";
import useWindowSize from "./useWindowSize";
//import HorizLines from "./HorizLines";
// import HorizAnim from "./HorizAnim";
import HorizAnimGroup from "./HorizAnimGroup";
import VertLines from "./VertLines";
import SpotifyPlayer from "react-spotify-player";
import GithubIcon from "./GithubIcon";
// import SVG from "react-inlinesvg";
import { useSearchParams, Link } from "react-router-dom";
import { IconButton } from "@mui/material";
// import InstallMobile from "@mui/icons-material/InstallMobile";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function Vapor() {
  const windowSize = useWindowSize();

  const [searchParams, setSearchParams] = useSearchParams();
  const mobile = searchParams.get("mobile");
  const onMobile = mobile === "true";

  const screenWidth = windowSize.width || window.innerWidth;
  const screenHeight = windowSize.height || window.innerHeight;

  const horizon =
    screenHeight >= 1400 ? screenHeight - 1400 * 0.45 : screenHeight * 0.55;

  const horizonNudge = 60;
  const textNudge = 200;

  return (
    <React.Fragment>
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
            {onMobile ? (
              <IconButton onClick={() => setSearchParams({})}>
                <DesktopMacIcon color="inherit" style={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setSearchParams({ mobile: "true" })}>
                <PhoneAndroidIcon color="inherit" style={{ color: "white" }} />
              </IconButton>
            )}
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
        <div className="bodySection" style={{ zIndex: 9997 }}>
          <Sunset
            horizon={horizon}
            horizonNudge={horizonNudge}
            textNudge={textNudge}
          />

          <VertLines
            width={screenWidth}
            height={screenHeight}
            horizon={horizon}
          />

          <HorizAnimGroup
            key={onMobile}
            width={screenWidth}
            height={screenHeight}
            horizon={horizon}
            duration={15000}
            total={onMobile ? 10 : 20}
            mobile={onMobile}
          />
        </div>
        {/* <div style={{ zIndex: 9996 }}>
        <div class="stars"></div>
        <div class="twinkling"></div>
      </div> */}
      </div>
    </React.Fragment>
  );
}

export default Vapor;
