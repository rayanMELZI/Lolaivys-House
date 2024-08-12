"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

import DataTableWithBtns from "@/components/DataTableWithBtns";
import { Button } from "@nextui-org/button";
import AddProduct from "@/components/AddProduct";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import DataTable from "@/components/DataTable";

export default function Produit() {
  // const router = useRouter();
  // const [user] = useAuthState(auth);
  // const userSession = sessionStorage.getItem("user");
  // if (!user && !userSession) {
  //   router.push("/connecter");
  // }
  return (
    <div>
      <DataTable
        columns={["NOM COMPLET", "PRODUITS ACHETÉS", "REVENUE"]}
        items={[{ name: "MELZI Rayane", price: 2, quantity: 280 }]}
      />
    </div>
  );
}
