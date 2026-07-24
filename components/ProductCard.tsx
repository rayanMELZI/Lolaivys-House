"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";

import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { HeartIcon } from "@/components/icons/HeartIcon";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { isWished, toggle } = useWishlist();
  const wished = isWished(product.id);
  const outOfStock = product.quantite <= 0;

  return (
    <div className="w-[14rem] h-[345px] rounded flex flex-col justify-between pb-2 bg-[#fff] overflow-hidden shadow-[0px_1px_2px_#888]">
      <div className="h-[228px] w-full relative">
        <Image
          src={product.image || "/basil.jpg"}
          alt={product.produit}
          fill={true}
          sizes="14rem"
          className="object-cover"
        />
        <button
          type="button"
          aria-label={
            wished ? "Retirer des souhaits" : "Ajouter aux souhaits"
          }
          onClick={() => toggle(product)}
          className={`absolute top-2 right-2 rounded-full p-2 bg-white/80 backdrop-blur hover:bg-white transition-colors ${
            wished ? "text-red-500" : "text-gray-500"
          }`}
        >
          <HeartIcon filled={wished} className="text-xl" />
        </button>
        {outOfStock && (
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            Rupture de stock
          </span>
        )}
      </div>
      <div className="flex justify-between px-3 align-center">
        <h1 className="text-2xl font-[500] pb-1">{product.produit}</h1>
        <p className="place-self-center">{product.prix} DZD</p>
      </div>
      <Button
        size="sm"
        isDisabled={outOfStock}
        className="mx-3 text-base bg-[rgba(153,205,50,0.1)] text-[rgba(11,158,3,0.8)] h-9 disabled:opacity-50"
        onClick={() => addToCart(product)}
      >
        {outOfStock ? "INDISPONIBLE" : "AJOUTER AU PANIER"}
      </Button>
    </div>
  );
}
