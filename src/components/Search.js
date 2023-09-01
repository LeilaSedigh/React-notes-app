import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ onChange }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={onChange}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
