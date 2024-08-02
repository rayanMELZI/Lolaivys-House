import React, { useEffect, useState } from "react";
import "./Shop.css";
import NavbarWithMegaMenu from "../components/NavbarWithMegaMenu.jsx";
import SideMenu from "../components/SideMenu.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ProductsContainer from "../components/ProductsContainer.jsx";

function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Tous");
  const [panierProducts, setPanierProducts] = useState([]);

  useEffect(() => {
    console.log(panierProducts);
  }, [panierProducts]);

  return (
    <div className="shop">
      {/* <NavbarWithMegaMenu /> */}
      <SideMenu items={panierProducts} />
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
  );
}

export default Shop;
