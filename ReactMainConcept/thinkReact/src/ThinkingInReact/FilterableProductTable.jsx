import React, { useEffect, useState } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const productListMock = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const fetchAPi = () => Promise.resolve(productListMock);

function FilterableProductTable() {
  const [state, setState] = useState({
    productList: [],
    searchText: "",
    inStock: false,
  });
  useEffect(() => {
    fetchAPi().then((res) => {
      setState({
        ...state,
        productList: res,
      });
    });
  }, []);

  const handleChange = (event) => {
    if (event.target.name === "product") {
      setState({
        ...state,
        searchText: event.target.value,
      });
    } else if (event.target.name === "inStock") {
      setState({
        ...state,
        inStock: event.target.checked,
      });
    }
  };
  const { productList, searchText, inStock } = state;
  return (
    <div className="FilterableProductTable">
      <SearchBar
        searchText={searchText}
        inStock={inStock}
        handleChange={handleChange}
      />
      <ProductTable
        productList={productList}
        searchText={searchText}
        inStock={inStock}
      />
    </div>
  );
}

export default FilterableProductTable;
