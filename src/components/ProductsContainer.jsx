import React from "react";
import "./ProductsContainer.css";
import products from "../Data/products.jsx";
import ProductItem from "./ProductItem.jsx";

function ProductsContainer({ searchValue, categoryValue, setPanierProducts }) {
  let searchError = 0;

  return (
    <div className="products-container">
      <ul>
        {searchValue === ""
          ? products.map(({ name, category, id, price, cover }) => {
              if (categoryValue === category || categoryValue === "Tous") {
                return (
                  <div key={id}>
                    <ProductItem
                      name={name}
                      price={price}
                      cover={cover}
                      setPanierProducts={setPanierProducts}
                    />
                  </div>
                );
              }
            })
          : products.map(({ name, category, id, price, cover }) => {
              if (
                name.toLowerCase().includes(searchValue.toLowerCase()) &&
                (categoryValue === category || categoryValue === "Tous")
              ) {
                return (
                  <div key={id}>
                    <ProductItem
                      name={name}
                      price={price}
                      cover={cover}
                      setPanierProducts={setPanierProducts}
                    />
                  </div>
                );
              } else {
                searchError++;
                return null;
              }
            })}
      </ul>

      {searchError === products.length && (
        <div className="search-error">
          Rien ne correspond a cette recherche :/
        </div>
      )}
    </div>
  );
}

export default ProductsContainer;
