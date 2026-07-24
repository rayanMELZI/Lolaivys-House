"use client";

import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/context/WishlistContext";

export default function LDSPage() {
  const { items } = useWishlist();

  return (
    <>
      <p className="ml-5 mb-1 text-xl">
        <b>Vos produits favoris</b>
      </p>
      <div className="flex gap-8 flex-wrap border-2 border-[rgba(11,158,3,0.4)] rounded p-4 min-h-[10rem]">
        {items.length === 0 ? (
          <p className="text-default-500 m-auto">
            Votre liste de souhaits est vide. Ajoutez des produits avec le ❤.
          </p>
        ) : (
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}
