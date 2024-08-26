"use client";
import Image from "next/image";
import React from "react";
import { PiUserCircleDashedThin } from "react-icons/pi";
const data = [
  {
    redTitle: "nicht lieferbar",
    lightblue: "Canify",
    thc: "THC 18%",
    cbd: "CBD < 1%",
    title: "Cannabis Flos 18/1 PT Mango",
    first: "Kultivar",
    second: "Mango",
    third: "Genetik",
    fourth: "Hybrid",
    price: "€11,66",
    sup: "1",
    per: "pro Gramm",
    lightgreen: "in den Warenkorb",
  },
];
function Card({ showBorder }) {
  return (
    <div
      className={`${
        showBorder ? "border-2 border-blue-400" : ""
      } max-h-max w-full rounded-tl-2xl rounded-br-2xl overflow-hidden relative shadow-lg`}
    >
      <div className="w-full h-[250px] ">
        <Image
          src="/can.png"
          //   fill
          height={250}
          width={200}
          alt="Can Image"
          className={`h-[250px] w-[250px] object-cover ${
            showBorder ? " border-b-2 border-blue-400" : ""
          }`}
        />
      </div>
      <div className="content bg-blue-200">
        {data.map((item, index) => (
          <div className="bg-blue-200" key={index}>
            <span className="absolute top-2 left-2 text-red-700 bg-gray-200 rounded-full px-2 flex items-center text-xs">
              <div className="h-1 w-1 bg-red-700 rounded-full mr-2"></div>
              {item.redTitle}
            </span>
            <p className="text-green-900 bg-green-100 text-center max-w-max mx-2 px-2 rounded">
              {item.lightblue}
            </p>
            <span className="flex py-2 items-center">
              <p className="bg-white mx-2">{item.thc}</p>
              <p className="bg-green-200">{item.cbd}</p>
              <PiUserCircleDashedThin
                className="ml-2 fill-blue-800 stroke-2 "
                size={24}
              />
            </span>
            <h3 className="text-green-900 font-semibold w-[80%] mx-2 py-2">
              {item.title}
            </h3>
            <div className="four">
              <div className="upper mx-2 flex justify-between">
                <p>{item.first}</p>
                <p>{item.second}</p>
              </div>
              <div className="lower mx-2 flex justify-between py-2">
                <p>{item.third}</p>
                <p>{item.fourth}</p>
              </div>
            </div>
            <div className="flex pricing mx-2 py-4 relative justify-between">
              <h3 className="font-extrabold text-green-900 text-lg ">
                {item.price}
              </h3>
              <span className="absolute text-[8px] top-[30%] left-[25%] font-extrabold">
                {item.sup}
              </span>
              <p className="ml-4 px-2 rounded-tl-3xl rounded-br-3xl text-xs flex items-center bg-lime-200">
                {item.lightgreen}
              </p>
              <div className="absolute top-[60%] text-[8px]">{item.per}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
