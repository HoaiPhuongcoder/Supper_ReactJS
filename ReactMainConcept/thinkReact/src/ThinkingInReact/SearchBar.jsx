import React from "react";

function SearchBar({ searchText, inStock, handleChange }) {
  return (
    <form action="">
      <input
        type="text"
        placeholder="Search"
        name="product"
        value={searchText}
        onChange={handleChange}
      />
      <div className="check-box">
        <input
          type="checkbox"
          name="inStock"
          checked={inStock}
          onChange={handleChange}
        />
        Only show products in stock
      </div>
    </form>
  );
}

export default SearchBar;
