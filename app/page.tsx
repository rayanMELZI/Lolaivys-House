"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

import { Link } from "@nextui-org/link";
// import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import ProductCard from "@/components/ProductCard";
import Nav from "@/components/navbar2";
import { signOut } from "firebase/auth";

export default function Home() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

  console.log(user);
  console.log(userSession);

  // if (!user && !userSession) {
  //   router.push("/connecter");
  // }

  return (
    <div className="relative flex flex-col h-screen">
      <Nav />
      <main className="container mx-auto max-w-7xl pt-16 pb-10 px-6 flex-grow">
        <div className="flex gap-8 flex-wrap justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
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
