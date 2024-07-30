import React, { useState } from "react";
import "../styles/App.css";
import NavbarWithMegaMenu from "./NavbarWithMegaMenu.jsx";
import SideMenu from "./SideMenu.jsx";
import SearchBar from "./SearchBar.jsx";
import ProductsContainer from "./ProductsContainer.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("Tous");

  return (
    <div className="app">
      <NavbarWithMegaMenu />
      <SideMenu />
      <SearchBar
        setCategoryValue={setCategoryValue}
        setSearchValue={setSearchValue}
      />
      <ProductsContainer
        searchValue={searchValue}
        categoryValue={categoryValue}
      />
    </div>
  );
}

export default App;
