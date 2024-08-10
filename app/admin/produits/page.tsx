"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

import DataTableWithBtns from "@/components/DataTableWithBtns";
import { Button } from "@nextui-org/button";

export default function Produit() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

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
        items={[
          {
            id: 1,
            image: "/basil.jpg",
            produit: "Yani",
            prix: 180,
            quantite: 20,
          },
        ]}
      />
      <Button
        radius="full"
        className="bg-gradient-to-tr from-[rgba(11,158,3,0.8)] to-[rgba(153,205,50,0.8)] shadow-lg h-[4rem] opacity-60 hover:opacity-100  absolute bottom-10 right-10"
      >
        <p className="h-11 text-white text-3xl font-bold">+</p>
      </Button>
    </div>
  );
}
