import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import ProductCard from "../components/ProductCard.tsx";

export default function Home() {
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

/* <h1>
  {/* <div className="shop"> 
    {/* <SideMenu items={panierProducts} /> 
    {/* <SearchBar
      setCategoryValue={setCategoryValue}
      setSearchValue={setSearchValue}
    /> 
    {/* <ProductsContainer
      searchValue={searchValue}
      categoryValue={categoryValue}
      setPanierProducts={setPanierProducts}
    /> 
   </div> 
 </h1> */
// import React, { useEffect, useState } from "react";
// import "./Shop.css";
// import NavbarWithMegaMenu from "../../components/NavbarWithMegaMenu.jsx";
// import SideMenu from "../../components/SideMenu.jsx";
// import SearchBar from "../../components/SearchBar.jsx";
// import ProductsContainer from "../../components/ProductsContainer.jsx";

// function Shop() {
//   const [searchValue, setSearchValue] = useState("");
//   const [categoryValue, setCategoryValue] = useState("Tous");
//   const [panierProducts, setPanierProducts] = useState([]);

//   useEffect(() => {
//     console.log(panierProducts);
//   }, [panierProducts]);

//   return (
//     <div className="shop">
//       {/* <NavbarWithMegaMenu /> */}
//       <SideMenu items={panierProducts} />
//       <SearchBar
//         setCategoryValue={setCategoryValue}
//         setSearchValue={setSearchValue}
//       />
//       <ProductsContainer
//         searchValue={searchValue}
//         categoryValue={categoryValue}
//         setPanierProducts={setPanierProducts}
//       />
//     </div>
//   );
// }

// export default Shop;
