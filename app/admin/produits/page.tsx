"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

import DataTableWithBtns from "@/components/DataTableWithBtns";
import { Button } from "@nextui-org/button";
import AddProduct from "@/components/AddProduct";
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

export default function Produit() {
  const [productsData, setProductsData] = useState<Data>([]);
  // const router = useRouter();
  // const [user] = useAuthState(auth);
  // const userSession = sessionStorage.getItem("user");
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
    <div>
      <DataTableWithBtns
        columns={[
          // { name: "IMAGE", uid: "image" },
          { name: "PRODUIT", uid: "produit" },
          { name: "PRIX (DZD)", uid: "prix" },
          { name: "QUANTITÉ", uid: "quantite" },
          { name: "ACTIONS", uid: "actions" },
        ]}
        items={
          //   [
          //   {
          //     id: 1,
          //     image: "/basil.jpg",
          //     produit: "Yani",
          //     prix: 180,
          //     quantite: 20,
          //   },
          // ]
          productsData
        }
      />
      {/* <Button
        radius="full"
        className="bg-gradient-to-tr from-[rgba(11,158,3,0.8)] to-[rgba(153,205,50,0.8)] shadow-lg h-[4rem] opacity-60 hover:opacity-100  absolute bottom-10 right-10"
      >
        <p className="h-11 text-white text-3xl font-bold">+</p>
      </Button> */}
      <AddProduct />
    </div>
  );
}
