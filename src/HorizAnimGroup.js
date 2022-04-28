import React from "react";
import HorizAnim from "./HorizAnim";
import Horizon from "./Horizon";

const HorizAnimGroup = ({
  width,
  height,
  horizon,
  duration,
  total,
  onMobile,
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
            onMobile={onMobile}
          />
        );
      })}
      {onMobile && <Horizon width={width} height={height} horizon={horizon} />}
    </>
  );
};

export default HorizAnimGroup;
