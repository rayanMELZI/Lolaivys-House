"use client";

import React from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";

import { EditIcon } from "./icons/EditIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { deleteProduct } from "@/utils/firebase";

import { useRouter } from "next/navigation";

interface props {
  columns: { name: string; uid: string }[];
  items: {
    id: string | number;
    image?: string;
    produit: string;
    prix: number;
    quantite: number;
  }[];
}
export default function DataTableWithBtns({ columns, items }: props) {
  const router = useRouter();
  const renderCell = React.useCallback((item: any, columnKey: any) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "produit":
        return (
          <User
            avatarProps={{ radius: "lg", src: item.image }}
            name={cellValue}
          ></User>
        );
      //   case "produit":
      //     return (
      //       <div className="flex flex-col">
      //         <p className="text-bold text-sm capitalize">{cellValue}</p>
      //       </div>
      //     );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-3 ">
            <Tooltip content="Détails">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Modifier l'article">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip
              color="danger"
              content="Supprimer l'article"
              // content={`${item.id}`}
            >
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon
                  onClick={() => {
                    deleteProduct(item.id);
                    // router.refresh();
                    window.location.reload(); //temporary
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="table de produits">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="bg-[rgba(153,205,50,0.1)] text-[rgba(11,158,3,0.8)]"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
