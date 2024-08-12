"use client";

import { db } from "@/app/firebase/config";
import ProductCard from "@/components/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Data {
  id: string | number;
  image?: string | undefined;
  produit: string;
  prix: number;
  quantite: number;
}
[];

export default function LDSPage() {
  const [productsData, setProductsData] = useState([]);

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
    <>
      <p className="ml-5 mb-1 text-xl">
        <b>Vos produit favoris</b>
      </p>
      <div className="flex gap-8 flex-wrap border-2 border-[rgba(11,158,3,0.4)] rounded p-4">
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
      </div>
    </>
  );
}
