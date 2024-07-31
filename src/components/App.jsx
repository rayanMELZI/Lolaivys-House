import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
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

    // <Router>
    //   <div>
    //     <SideMenu />
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/panier" element={<Panier />} />
    //       <Route path="/liste_de_souhaits" element={<ListeDeSouhaits />} />
    //       <Route path="/account" element={<account />} />
    //       <Route path="/admin" element={<Admin />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
