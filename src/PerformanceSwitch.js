import React from "react";
import { IconButton } from "@mui/material";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const PerformanceSwitch = ({ onMobile, setSearchParams }) => {
  if (onMobile) {
    return (
      <IconButton onClick={() => setSearchParams({})}>
        <PhoneAndroidIcon color="inherit" style={{ color: "white" }} />
      </IconButton>
    );
  } else {
    return (
      <IconButton onClick={() => setSearchParams({ mobile: "true" })}>
        <DesktopMacIcon color="inherit" style={{ color: "white" }} />
      </IconButton>
    );
  }
};

export default PerformanceSwitch;
