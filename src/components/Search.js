import React from "react";
import { CiSearch } from "react-icons/ci";

function Search({ bgColor = "", text, className }) {
  return (
    <span className={`search flex items-center ${className} ${bgColor}`}>
      <input
        className={` outline-none  mx-2 ${bgColor} placeholder-blue-400`}
        placeholder="Suchen"
        type="text"
        id=""
      />
      <span>
        <CiSearch size={20} className="stroke-2 stroke-blue-400" />
      </span>
    </span>
  );
}

export default Search;
