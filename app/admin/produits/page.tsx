"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

import DataTableWithBtns from "@/components/DataTableWithBtns";
import { Button } from "@nextui-org/button";
import AddProduct from "@/components/AddProduct";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ReloadIcon } from "@/components/icons/ReloadIcon";

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

  const fetchProductsData = async () => {
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
  };
  useEffect(() => {
    console.log(productsData);
  }, [productsData]);

  useEffect(() => {
    // (async () => {
    //   const colRef = collection(db, "produits");
    //   const data = await getDocs(colRef);
    //   console.log(data);
    //   const formedData: Data = data.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       produit: doc.data().produit,
    //       prix: doc.data().prix,
    //       quantite: doc.data().quantite,
    //     };
    //   });
    //   setProductsData(formedData);
    // })();
    fetchProductsData();
  }, []);

  return (
    <div>
      {/* <div className="flex justify-end">
        <Button onClick={fetchProductsData} className="m-2">
          <ReloadIcon />
        </Button>
      </div> */}
      <DataTableWithBtns
        columns={[
          // { name: "IMAGE", uid: "image" },
          { name: "PRODUIT", uid: "produit" },
          { name: "PRIX (DZD)", uid: "prix" },
          { name: "QUANTITÉ", uid: "quantite" },
          { name: "ACTIONS", uid: "actions" },
        ]}
        items={productsData}
        //   [
        //   {
        //     id: 1,
        //     image: "/basil.jpg",
        //     produit: "Yani",
        //     prix: 180,
        //     quantite: 20,
        //   },
        // ]
        fetchProductsData={fetchProductsData}
      />
      <AddProduct fetchProductsData={fetchProductsData} />
    </div>
  );
}
