import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

interface props {
  columns: string[];
  items: { name: string; price: number; quantity: number }[] | undefined;
}

export default function DataTable({ columns, items }: props) {
  return (
    <Table aria-label="Top ventes">
      <TableHeader>
        {columns.map((col: string) => (
          <TableColumn className="bg-[rgba(153,205,50,0.1)] text-[rgba(11,158,3,0.8)]">
            {col}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {items && items.length > 0 ? (
          items.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableBody emptyContent={"Aucun produit a aficher."}>{[]}</TableBody>
        )}
      </TableBody>
    </Table>
  );
}
