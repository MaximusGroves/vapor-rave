import React from "react";
import HorizAnim from "./HorizAnim";
import Horizon from "./Horizon";

const HorizAnimGroup = ({
  width,
  height,
  horizon,
  duration,
  total,
  mobile,
}) => {
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
            mobile={mobile}
          />
        );
      })}
      {mobile && (
        <Horizon
          width={width}
          height={height}
          horizon={horizon}
          mobile={mobile}
        />
      )}
    </>
  );
};

export default HorizAnimGroup;
