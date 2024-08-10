"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Janvier", produit: 186, revenu: 80 },
  { month: "Février", produit: 305, revenu: 200 },
  { month: "Mars", produit: 237, revenu: 120 },
  { month: "Avril", produit: 73, revenu: 190 },
  { month: "Mai", produit: 209, revenu: 130 },
  { month: "Juin", produit: 214, revenu: 140 },
  { month: "Juillet", produit: 186, revenu: 80 },
  { month: "Août", produit: 305, revenu: 200 },
  { month: "Septembre", produit: 237, revenu: 120 },
  { month: "Octobre", produit: 73, revenu: 190 },
  { month: "Novembre", produit: 209, revenu: 130 },
  { month: "Décembre", produit: 214, revenu: 140 },
];

const chartConfig = {
  produit: {
    label: "Produit",
    color: "rgba(153,205,50,1)",
  },
  revenu: {
    label: "Revenu",
    color: "rgba(11,158,3,1)",
  },
} satisfies ChartConfig;

export default function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="produit" fill="var(--color-produit)" radius={4} />
        <Bar dataKey="revenu" fill="var(--color-revenu)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
