import React from "react";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import Search from "./Search";
import MuiDrawer from "./MuiDrawer";

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
        <span className="search flex items-center bg-green-50 px-2 rounded-full text-xs sm:text-base">
          <input
            className="bg-green-50 outline-none mx-2 placeholder-blue-400"
            placeholder="Suchen"
            type="text"
            id=""
          />
          <span>
            <CiSearch size={20} className="stroke-2 stroke-blue-400" />
          </span>
        </span>
        <nav className="navItems">
          <ul className="hidden navitem lg:flex w-full justify-center">
            {navItems.map((items, index) => (
              <div className="flex mx-1 items-center">
                <div
                  className={`w-5 h-5 ${
                    items.selected ? "bg-blue-400" : "bg-gray-200"
                  } rounded-tl-3xl rounded-br-3xl`}
                ></div>
                <li className="mx-2" key={index}>
                  {items.name}
                </li>
              </div>
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
          <p className="bg-lime-200 text-center rounded-tl-3xl rounded-br-3xl p-1 hidden lg:block">
            Anmelden
          </p>
        </span>

        <MuiDrawer />
      </div>
      <div className="breadcrums my-8 flex flex-col md:flex-row justify-center lg:justify-between items-center w-full text-xs sm:text-base">
        <ul className="flex items-center w-full">
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
        <div className="step flex w-full lg:w-1/4 lg:flex-col justify-between">
          <div className="step1 mx-2">GKV mit Kostenubernahme</div>
          <div className="step2 border-[2px] border-blue-400 text-center rounded-tl-3xl rounded-br-3xl px-2 flex items-center">
            Preisoptionen
          </div>
        </div>
      </div>
      <div className="Bluten flex flex-col md:flex-row justify-between items-center text-xs sm:text-base">
        <span className="left my-2 sm:py-0 blutenIcon flex items-center w-full lg:w-[10%] justify-center lg:justify-normal">
          <div className="h-5 w-5 rounded-tl-2xl rounded-br-2xl bg-blue-400 mx-2 hidden sm:block"></div>
          <h3>Bluten</h3>
          <Search
            className="mobile mx-2 sm:mx-4 px-2 py-2 rounded-full lg:hidden outline-none"
            bgColor="bg-[#ccc]"
          />
        </span>
        <span className="right flex lg:w-[70%] items-center justify-center lg:justify-end">
          <Search
            className="mx-4 px-2 py-2 rounded-full hidden lg:flex outline-none"
            bgColor="bg-[#ccc]"
          />
          <span className="select mx-4">
            <label htmlFor="cars"></label>
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
          <span className="switchButton mx-2 bg-green-100 flex items-center">
            Verfugbarkeit
            <label className="switch mx-1">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </span>
          <span className="menuIcon hidden lg:block">
            <MdMenu size={24} className="fill-green-700 bg-green-100 " />
          </span>
        </span>
      </div>
    </header>
  );
}

export default Header;
