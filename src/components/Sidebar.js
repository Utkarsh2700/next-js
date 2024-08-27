"use client";
import React from "react";
import RangeSlider from "./DualThumbSlider";
import { Box, Checkbox, Divider, Slider } from "@mui/material";
import { green } from "@mui/material/colors";
import { FaChevronDown } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const checkbox = [
  {
    name: "ADREXpharma",
  },
  {
    name: "Aurora",
  },
  {
    name: "Avaay",
  },
  {
    name: "Bedrocan",
  },
  {
    name: "Cannamedical",
  },
];
const genetik = [
  {
    name: "Indica",
  },
  {
    name: "Sativa",
  },
  {
    name: "Hybrid",
  },
];

const bestrahltung = [
  {
    name: "bestrahlt",
  },
  {
    name: "nicht bestrahlt",
  },
];

function Sidebar({ className }) {
  const [value, setValue] = React.useState([0, 0]);
  const [percentage, setPercentage] = React.useState([11, 18]);
  //   const [value, setValue] = React.useState([20, 37]);
  function valuetext(percentage) {
    return `${percentage}°C`;
  }

  const handlePercentageChange = (event, newPercentage) => {
    setPercentage(newPercentage);
  };

  function getData(data) {
    setValue(data);
  }

  const [percent, setPercent] = React.useState([1, 5]);
  function percentText(percent) {
    return `${percent}°C`;
  }

  const handlePercentChange = (event, newPercent) => {
    setPercent(newPercent);
  };

  //   function getPercentData(data) {
  //     setPercent(data);
  //   }

  return (
    <div className={`${className}`}>
      <span className="text-green-900 font-bold text-center bg-green-50">
        Filter
      </span>
      <span className="my-4">
        <h4 className="text-center my-4">Peris</h4>
        <RangeSlider getData={getData} />
        <span className="lowNHigh flex w-full">
          <span className="w-full bg-[#e0e0e0] text-center rounded-full">
            {value[0]}€
          </span>
          <span className="mx-2">-</span>
          <span className="w-full bg-[#e0e0e0] text-center rounded-full">
            {value[1]}€
          </span>
        </span>
        <div className="herstellerCheckbox">
          <h4 className="text-center text-green-900 font-semibold my-4">
            Herstellar
          </h4>
          {checkbox.map((item, index) => (
            <span className="flex mt-2 items-center" key={index}>
              {/* <input
                className=" accent-white appearance-none h-5 w-5 bg-[#d5d5d5] rounded-[5px] cursor-pointer after:content"
                type="checkbox"
                id={item.name}
              /> */}
              <Checkbox
                {...label}
                sx={{
                  color: green[500],
                  "&.Mui-checked": {
                    color: green[500],
                  },
                }}
              />
              <label className="ml-2 sm:text-base text-xs" htmlFor={item.name}>
                {item.name}
              </label>
            </span>
          ))}
          <div className=" text-center border-2 border-lime-400 rounded-tl-2xl rounded-br-2xl w-full text-xs sm:text-base mx-2">
            mehr anzeigen
          </div>
        </div>
        <Divider className="my-4 w-full mx-2" />
        <div className="THC Gehalt">
          <p>THC Gehalt</p>
          <Box sx={{ width: "100%" }}>
            <Slider
              sx={{
                color: "#4ade80",
                "& .MuiSlider-thumb": {
                  borderRadius: "24px 0px 24px 0px",
                },
              }}
              getAriaLabel={() => "Temperature range"}
              value={percentage}
              onChange={handlePercentageChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <span className="lowNHigh flex w-full">
            <span className="w-full bg-[#e0e0e0] text-center rounded-full">
              {percentage[0]}%
            </span>
            <span className="mx-2">-</span>
            <span className="w-full bg-[#e0e0e0] text-center rounded-full">
              {percentage[1]}%
            </span>
          </span>
        </div>

        <div className="GCD Gehalt my-6">
          <p>GCD Gehalt</p>
          <Box sx={{ width: "100%" }}>
            <Slider
              sx={{
                color: "#4ade80",
                "& .MuiSlider-thumb": {
                  borderRadius: "24px 0px 24px 0px",
                },
              }}
              getAriaLabel={() => "Temperature range"}
              value={percent}
              onChange={handlePercentChange}
              valueLabelDisplay="auto"
              getAriaValueText={percentText}
            />
          </Box>
          <span className="lowNHigh flex w-full">
            <span className="w-full bg-[#e0e0e0] text-center rounded-full">
              {percent[0]}%
            </span>
            <span className="mx-2">-</span>
            <span className="w-full bg-[#e0e0e0] text-center rounded-full">
              {percent[1]}%
            </span>
          </span>
        </div>

        <div className="Genetik">
          <h4 className="text-green-950 font-semibold text-center">Genetik</h4>
          <span className="genetikItems">
            {genetik.map((item, index) => (
              <span
                className={`cursor-pointer bg-green-100 text-green-900 text-xs sm:text-base mx-1 px-1 py-0.5 ${
                  index === 0
                    ? "bg-blue-500 text-white"
                    : "bg-green-100 text-green-900"
                }`}
                key={index}
              >
                {item.name}
              </span>
            ))}
          </span>
        </div>
        <div className="bestra my-6">
          <h4 className="text-green-950 font-semibold text-center">
            Bestrahltung
          </h4>
          <span className="genetikItems flex items-center">
            {bestrahltung.map((item, index) => (
              <span
                className={`cursor-pointer bg-green-100 text-green-900 text-xs sm:text-base mx-1 px-1 py-0.5 ${
                  index === 0
                    ? "bg-blue-500 text-white"
                    : "bg-green-100 text-green-900"
                }`}
                key={index}
              >
                {item.name}
              </span>
            ))}
          </span>
        </div>
        <Divider className="my-4 mx-2 w-full" />
        <div className="trepne flex w-full items-center">
          <p className="text-center font-semibold text-green-900 w-[85%]">
            Trepne
          </p>
          <FaChevronDown className="fill-blue-400" />
        </div>
        <Divider className="mt-4 mx-2 w-full" />
      </span>
      <div className="cross flex w-full items-center justify-center">
        <RxCross1 className="text-blue-400" />
        <p className="text-center font-semibold w-[75%] text-xs">
          all Filter zurucksetzen
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
