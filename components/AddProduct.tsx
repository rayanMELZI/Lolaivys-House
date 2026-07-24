"use client";

import React, { useEffect, useState } from "react";
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

import { addProduct } from "@/utils/firebase";
import { uploadProductImage } from "@/utils/storage";

interface AddProductProps {
  fetchProductsData: () => void | Promise<void>;
}

export default function AddProduct({ fetchProductsData }: AddProductProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [produit, setProduit] = useState<string>("");
  const [prix, setPrix] = useState<number | undefined>();
  const [quantite, setQuantite] = useState<number | undefined>();
  const [image, setImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSumbit = async () => {
    try {
      setSaving(true);
      const imageUrl = image ? await uploadProductImage(image) : undefined;
      await addProduct({
        produit: produit,
        prix: prix,
        quantite: quantite,
        image: imageUrl,
      });
      await fetchProductsData();
      setProduit("");
      setPrix(undefined);
      setQuantite(undefined);
      setImage(null);
      onOpenChange();
    } catch (error) {
      console.error("Failed to add the product:", error);
      alert("Échec de l'ajout du produit.");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    console.log(produit, prix, quantite);
  }, [produit, prix, quantite]);

  return (
    <>
      <Button
        onPress={onOpen}
        radius="full"
        className="bg-gradient-to-tr from-[rgba(11,158,3,0.8)] to-[rgba(153,205,50,0.8)] shadow-lg h-[4rem] opacity-60 hover:opacity-100  absolute bottom-10 right-10"
      >
        <p className="h-11 text-white text-3xl font-bold">+</p>
      </Button>

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
                  value={prix?.toString() ?? ""}
                  onValueChange={(v) => setPrix(v === "" ? undefined : Number(v))}
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
                  value={quantite?.toString() ?? ""}
                  onValueChange={(v) =>
                    setQuantite(v === "" ? undefined : Number(v))
                  }
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
                  variant="bordered"
                  classNames={{
                    inputWrapper: [
                      "border-2",
                      "group-data-[focus=true]:border-[rgba(11,158,3,0.4)]",
                      "!cursor-text",
                    ],
                  }}
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                  isDisabled={saving}
                >
                  Annuler
                </Button>
                <Button
                  className="bg-[rgba(153,205,50,0.3)] text-[rgba(11,158,3,0.8)]"
                  onPress={handleSumbit}
                  isLoading={saving}
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
