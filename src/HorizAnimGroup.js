import React from "react";
import HorizAnim from "./HorizAnim";

const HorizLines = ({ width, height, horizon, duration, total }) => {
  const separation = 40 / total;

  return (
    <>
      {[...Array(total).keys()].map((val) => {
        return (
          <HorizAnim
            width={width}
            height={height}
            horizon={horizon}
            start={val * separation}
            duration={duration}
          />
        );
      })}
    </>
  );
};

export default HorizLines;
