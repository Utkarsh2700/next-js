import React from "react";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import Search from "./Search";

const navItems = [
  {
    name: "Rezept einolsen",
    selected: true,
  },
  {
    name: "Live Bestand",
    selected: false,
  },
  {
    name: "Videosprechstunde",
    selected: false,
  },
  {
    name: "FAQs",
    selected: false,
  },
  {
    name: "Konkat",
    selected: false,
  },
];
const breadcrums = [
  {
    name: "Home",
  },
  {
    name: "Livebestand",
  },
  {
    name: "Cannabis Bluten",
  },
];

function Header() {
  return (
    <header className="w-full">
      <div className="w-full flex justify-between">
        <span className="search flex items-center bg-green-50">
          <input
            className="bg-green-50 outline-none mx-2"
            placeholder="Suchen"
            type="text"
            id=""
          />
          <span>
            <CiSearch size={20} className="stroke-2 stroke-blue-400" />
          </span>
        </span>
        <nav className="navItems">
          <ul className="navitem flex w-full justify-center">
            {navItems.map((items, index) => (
              <li className="mx-2" key={index}>
                {items.name}
              </li>
            ))}
          </ul>
        </nav>
        <span className="flex items-center">
          <span className="cart">
            <LiaShoppingCartSolid
              size={20}
              className="stroke-2 stroke-blue-400 mx-2"
            />
          </span>
          <p className="bg-lime-200 text-center rounded-tl-3xl rounded-br-3xl p-1">
            Anmelden
          </p>
        </span>
      </div>
      <div className="breadcrums my-4 flex justify-between items-center">
        <ul className="flex items-center">
          {breadcrums.map((crums, index) => (
            <span key={index} className=" flex items-center mx-2">
              <li
                className={`${
                  index === breadcrums.length - 1
                    ? "text-green-700 font-bold"
                    : "text-blue-400"
                } mx-2`}
              >
                {crums.name}
              </li>
              <span>
                {index < breadcrums.length - 1 && (
                  <FaArrowRightLong className=" fill-blue-400" />
                )}
              </span>
            </span>
          ))}
        </ul>
        <div className="step">
          <div className="step1">GKV mit Kostenubernahme</div>
          <div className="step2 border-[2px] border-blue-400 text-center rounded-tl-3xl rounded-br-3xl">
            Preisoptionen
          </div>
        </div>
      </div>
      <div className="Bluten flex justify-between">
        <span className="left blutenIcon flex items-center">
          <div className="h-5 w-5 rounded-tl-2xl rounded-br-2xl bg-blue-400 mx-2"></div>
          <h3>Bluten</h3>
        </span>
        <span className="right flex ">
          <Search className="mx-4" bgColor="bg-[#ccc]" />

          <span className="select mx-4">
            <label htmlFor="cars ">{/* Sortieren nach */}</label>
            <select
              className="text-green-700 bg-green-100"
              name="cars"
              id="cars"
            >
              <option value="volvo">Sortieren nach</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </span>
          <span className="switchButton mx-2 bg-green-100">
            Verfugbarkeit
            <label className="switch mx-1">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </span>
          <span className="menuIcon">
            <MdMenu size={24} className="fill-green-700 bg-green-100 " />
          </span>
        </span>
      </div>
    </header>
  );
}

export default Header;
