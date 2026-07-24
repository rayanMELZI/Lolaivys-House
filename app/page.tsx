"use client";

import { db } from "@/app/firebase/config";

import ProductCard from "@/components/ProductCard";
import Nav from "@/components/navbar2";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { Product } from "@/types";

export default function Home() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const colRef = collection(db, "produits");
        const data = await getDocs(colRef);
        const formedData: Product[] = data.docs.map((doc) => ({
          id: doc.id,
          produit: doc.data().produit,
          prix: doc.data().prix,
          quantite: doc.data().quantite,
          image: doc.data().image ?? undefined,
        }));
        setProductsData(formedData);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Nav />
      <main className="container mx-auto max-w-7xl pt-16 pb-10 px-6 flex-grow">
        {!loading && productsData.length === 0 && (
          <p className="text-center text-default-500 mt-10">
            Aucun produit disponible pour le moment.
          </p>
        )}
        <div className="flex gap-8 flex-wrap justify-center">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
