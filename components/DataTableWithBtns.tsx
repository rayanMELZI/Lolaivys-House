"use client";

import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";

import { EditIcon } from "./icons/EditIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { deleteProduct, updateProduct } from "@/utils/firebase";

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
export default function DataTableWithBtns({
  columns,
  items,
  fetchProductsData,
}: props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [productId, setProductId] = useState<string>("");
  const [produit, setProduit] = useState<string>("");
  const [prix, setPrix] = useState<number | undefined>();
  const [quantite, setQuantite] = useState<number | undefined>();
  //  const [image, setImage] = useState<File | null>(null);

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
                <EditIcon
                  onClick={() => {
                    setProductId(item.id);
                    setProduit(item.produit);
                    setPrix(item.prix);
                    setQuantite(item.quantite);
                    onOpen();
                  }}
                />
              </span>
            </Tooltip>
            <Tooltip
              color="danger"
              content="Supprimer l'article"
              // content={`${item.id}`}
            >
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon
                  onClick={async () => {
                    await deleteProduct(item.id);
                    fetchProductsData();
                    // router.refresh();
                    // window.location.reload(); //temporary
                    // fetchProductsData();
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

  const handleSubmit = async () => {
    try {
      onOpenChange();
      await updateProduct(productId, {
        produit: produit,
        prix: prix,
        quantite: quantite,
      });
      setProduit("");
      setPrix(undefined);
      setQuantite(undefined);
      fetchProductsData();
    } catch (error) {
      console.error("Failed to update the product:", error);
    }
  };

  return (
    <>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Ajouter un nouveau produit
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Nom"
                  value={produit}
                  onValueChange={setProduit}
                  variant="bordered"
                  classNames={{
                    // label: "text-[rgba(11,158,3,0.8)]",
                    inputWrapper: [
                      "border-2",
                      "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
                      "!cursor-text",
                    ],
                  }}
                />
                <Input
                  type="number"
                  label="Prix"
                  value={prix}
                  onValueChange={setPrix}
                  variant="bordered"
                  classNames={{
                    inputWrapper: [
                      "border-2",
                      "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
                      "!cursor-text",
                    ],
                  }}
                  endContent={
                    <div className="pointer-events-none flex items-center h-full ">
                      <span className="text-default-400 text-small">DZD</span>
                    </div>
                  }
                />
                <Input
                  //   isInvalid={value < 0}
                  type="number"
                  label="Quantité"
                  value={quantite}
                  onValueChange={setQuantite}
                  variant="bordered"
                  classNames={{
                    inputWrapper: [
                      "border-2",
                      "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
                      "!cursor-text",
                    ],
                  }}
                />

                <Divider className="my-2" />

                <Input
                  label="Image"
                  //   placeholder="Ajouter l'image du produit"
                  variant="bordered"
                  classNames={{
                    inputWrapper: [
                      "border-2",
                      "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
                      "!cursor-text",
                    ],
                  }}
                  type="file"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Annuler
                </Button>
                <Button
                  className="bg-[rgba(153,205,50,0.3)] text-[rgba(11,158,3,0.8)]"
                  onPress={handleSubmit}
                >
                  Ajouter
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
