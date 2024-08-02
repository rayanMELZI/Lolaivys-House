import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Login from "./pages/Login.jsx";
import Shop from "./pages/Shop.jsx";
import Panier from "./pages/Panier.jsx";
import ListeDeSouhaits from "./pages/ListeDeSouhaits.jsx";
import Compte from "./pages/Compte.jsx";
// import Admin from "./pages/Admin.jsx";

import NavbarWithMegaMenu from "./components/NavbarWithMegaMenu.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarWithMegaMenu />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Shop />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/liste_de_souhaits" element={<ListeDeSouhaits />} />
          <Route path="/compte" element={<Compte />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
