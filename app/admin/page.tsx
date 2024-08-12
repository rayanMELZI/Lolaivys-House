"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

import StatisticCard from "@/components/StatisticCard";
import DataTable from "@/components/DataTable";
import Chart from "@/components/Chart";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const userSession = sessionStorage.getItem("user");

  if (!user && !userSession) {
    router.push("/connecter");
  }

  return (
    <div className="relative flex flex-col h-screen gap-9">
      <div className="flex justify-around">
        <StatisticCard icon="🛒" title="Produits Vendues" amount={8} />
        <StatisticCard icon="💵" title="Revenu" amount="1000 DZD" />
        <StatisticCard icon="🙋" title="Clients" amount={32} />
      </div>
      <div className="flex gap-10 max-h-[15rem]">
        <Chart />
        <div className="w-[80vw]">
          <h1 className="text-[rgba(11,158,3,0.8)] mb-4">
            <b>TOP Produits vendus</b>
          </h1>
          <DataTable
            columns={["PRODUIT", "PRIX (DZD)", "QUANTITÉ"]}
            items={[
              {
                name: "Lola",
                price: 180,
                quantity: 20,
              },
              {
                name: "Lola",
                price: 180,
                quantity: 20,
              },
              {
                name: "Lola",
                price: 180,
                quantity: 20,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
