import React from "react";

const Search = props => {
  return (
    <div>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.searchQuery}
      />
    </div>
  );
};

export default Search;
