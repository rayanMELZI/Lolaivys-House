"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

import { auth, db } from "@/app/firebase/config";
import { useCart } from "@/context/CartContext";
import { Order } from "@/types";

export default function Panier() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();
  const [user] = useAuthState(auth);
  const [placing, setPlacing] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setPlacing(true);
    try {
      const order: Order = {
        userId: user?.uid ?? null,
        userEmail: user?.email ?? null,
        items: items.map((i) => ({
          id: i.id,
          produit: i.produit,
          prix: i.prix,
          cartQuantity: i.cartQuantity,
        })),
        total: totalPrice,
        createdAt: Date.now(),
      };
      await addDoc(collection(db, "commandes"), order);
      clearCart();
      alert("Commande passée avec succès ! Merci pour votre achat.");
      router.push("/");
    } catch (err) {
      console.error("Checkout failed:", err);
      alert("Échec de la commande. Veuillez réessayer.");
    } finally {
      setPlacing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-2xl font-semibold">Votre panier est vide</h1>
        <Button
          className="bg-[rgba(153,205,50,0.3)] text-[rgba(11,158,3,0.8)]"
          onClick={() => router.push("/")}
        >
          Continuer vos achats
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-4">Votre panier</h1>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border rounded-lg p-3"
          >
            <div className="relative h-16 w-16 rounded overflow-hidden shrink-0 bg-default-100">
              <Image
                src={item.image || "/basil.jpg"}
                alt={item.produit}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>

            <div className="flex-grow">
              <p className="font-medium">{item.produit}</p>
              <p className="text-sm text-default-500">{item.prix} DZD</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                isIconOnly
                variant="flat"
                onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
              >
                −
              </Button>
              <span className="w-6 text-center">{item.cartQuantity}</span>
              <Button
                size="sm"
                isIconOnly
                variant="flat"
                onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
              >
                +
              </Button>
            </div>

            <p className="w-24 text-right font-medium">
              {item.prix * item.cartQuantity} DZD
            </p>

            <Button
              size="sm"
              color="danger"
              variant="light"
              onClick={() => removeFromCart(item.id)}
            >
              Retirer
            </Button>
          </div>
        ))}
      </div>

      <Divider className="my-5" />

      <div className="flex items-center justify-between">
        <Button variant="light" color="danger" onClick={clearCart}>
          Vider le panier
        </Button>
        <div className="text-right">
          <p className="text-lg">
            Total : <span className="font-semibold">{totalPrice} DZD</span>
          </p>
          <Button
            className="mt-2 bg-gradient-to-tr from-[rgba(11,158,3,0.8)] to-[rgba(153,205,50,0.8)] text-white font-semibold"
            isLoading={placing}
            onClick={handleCheckout}
          >
            Passer la commande
          </Button>
        </div>
      </div>
    </div>
  );
}
