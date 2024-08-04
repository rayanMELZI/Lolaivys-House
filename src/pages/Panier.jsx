import React, { useState } from "react";
import "./Panier.css";
import ProductsContainer from "../components/ProductsContainer";
import SearchBar from "../components/SearchBar";
import SideMenu from "../components/SideMenu";

function Panier() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Tous");
  const [panierProducts, setPanierProducts] = useState([]);

  return (
    <div className="page-de-commande">
      <div className="panier-content">
        <SearchBar
          setCategoryValue={setCategoryValue}
          setSearchValue={setSearchValue}
        />
        <ProductsContainer
          searchValue={searchValue}
          categoryValue={categoryValue}
          setPanierProducts={setPanierProducts}
        />
      </div>
      <div className="order-details">
        <SideMenu items={panierProducts} onlyPnaier={true} />
      </div>
    </div>
  );
}

export default Panier;
