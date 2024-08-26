import React from "react";
import { CiSearch } from "react-icons/ci";

function Search({ bgColor, placeholder, text, className }) {
  return (
    <span className={`search flex items-center ${className}`}>
      <input
        className={`outline-2 outline-blue-400 mx-2`}
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
