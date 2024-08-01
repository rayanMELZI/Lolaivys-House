import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Login from "./pages/Login.jsx";
import Shop from "./pages/Shop.jsx";
// import Panier from "./pages/Panier.jsx";
// import ListeDeSouhaits from "./pages/ListeDeSouhaits.jsx";
// import Account from "./pages/Account.jsx";
// import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <SideMenu />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Shop />} />
        {/* <Route path="/panier" element={<Panier />} />
        <Route path="/liste_de_souhaits" element={<ListeDeSouhaits />} />
        <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
