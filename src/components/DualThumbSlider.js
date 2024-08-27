"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ getData }) {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sendData = () => {
    getData(value);
  };
  React.useEffect(() => {
    sendData();
  }, [value]);
  console.log(value);

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        sx={{
          color: "#4ade80",
          "& .MuiSlider-thumb": {
            borderRadius: "24px 0px 24px 0px",
          },
        }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
