import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ productList, inStock, searchText }) {
  let lastCategory = null;
  const rows = [];
  productList.forEach((productItem) => {
    if (inStock && !productItem.stocked) {
      return;
    }
    if (
      productItem.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1
    ) {
      return;
    }
    if (productItem.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={productItem.category}
          category={productItem.category}
        />
      );
    }
    rows.push(<ProductRow key={productItem.name} product={productItem} />);
    lastCategory = productItem.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
