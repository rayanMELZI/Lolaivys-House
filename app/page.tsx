"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

import { Link } from "@nextui-org/link";
// import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import ProductCard from "@/components/ProductCard";
import Nav from "@/components/navbar2";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

interface Data {
  id: string | number;
  image?: string | undefined;
  produit: string;
  prix: number;
  quantite: number;
}
[];

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

  console.log(user);
  console.log(userSession);

  // if (!user && !userSession) {
  //   router.push("/connecter");
  // }

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "produits");
      const data = await getDocs(colRef);
      console.log(data);
      const formedData: Data = data.docs.map((doc) => {
        return {
          id: doc.id,
          produit: doc.data().produit,
          prix: doc.data().prix,
          quantite: doc.data().quantite,
        };
      });
      setProductsData(formedData);
    })();
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Nav />
      <main className="container mx-auto max-w-7xl pt-16 pb-10 px-6 flex-grow">
        <div className="flex gap-8 flex-wrap justify-center">
          {productsData.map((product) => {
            if (product.quantite > 0) {
              //temporary: i better make a style of "rupture de stock"
              return (
                <ProductCard
                  nom={product.produit}
                  prix={product.prix}
                  quantite={product.quantite}
                />
              );
            }
          })}
          {/* // <ProductCard nom={"Yani"} prix={180} /> */}
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
