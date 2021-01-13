import React from "react";
import { Search } from "carbon-components-react";

export default function SearchInput(props) {
  return (
    <div>
      <Search
        labelText=""
        id="search-1"
        placeHolderText="Type to search for movies"
        value={props.searchTerm}
        onChange={(event) => props.setSearchTerm(event.target.value)}
      />
    </div>
  );
}
