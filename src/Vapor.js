import React from "react";

import "./App.css";
import "./stars.css";
import "./bubbles.scss";
import "./shootingstar.scss";

import HeaderStuff from "./HeaderStuff";
import Sunset from "./Sunset";
import VertLines from "./VertLines";
import HorizAnimGroup from "./HorizAnimGroup";
import ShootingStars from "./ShootingStars";
import Bubbles from "./Bubbles";
import StarScape from "./StarScape";

import useWindowSize from "./useWindowSize";
import { useSearchParams } from "react-router-dom";

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
          width: screenWidth,
          height: screenHeight,
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <HeaderStuff onMobile={onMobile} setSearchParams={setSearchParams} />

        <div
          className="bodySection"
          style={{
            zIndex: 9997,
            webkitFilter: "saturate(1.1) contrast(1.5)",
            filter: "saturate(1.1) contrast(1.5)",
          }}
        >
          <Sunset
            horizon={horizon}
            horizonNudge={horizonNudge}
            textNudge={textNudge}
            onMobile={onMobile}
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
            total={onMobile ? 10 : 15}
            onMobile={onMobile}
          />

          <ShootingStars
            total={100}
            screenWidth={screenWidth}
            horizon={horizon - horizonNudge}
          />
        </div>

        <Bubbles />

        <StarScape onMobile={false} />
      </div>
    </React.Fragment>
  );
}

export default Vapor;
