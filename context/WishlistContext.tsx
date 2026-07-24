"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Product, WishlistItem } from "@/types";

const STORAGE_KEY = "lh_wishlist";

interface WishlistContextValue {
  items: WishlistItem[];
  toggle: (product: Product) => void;
  remove: (id: string) => void;
  isWished: (id: string) => boolean;
  count: number;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (err) {
      console.error("Failed to read wishlist from storage:", err);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error("Failed to persist wishlist:", err);
    }
  }, [items, hydrated]);

  const toggle = useCallback((product: Product) => {
    setItems((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.filter((i) => i.id !== product.id)
        : [...prev, product]
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const isWished = useCallback(
    (id: string) => items.some((i) => i.id === id),
    [items]
  );

  const value = useMemo(
    () => ({ items, toggle, remove, isWished, count: items.length }),
    [items, toggle, remove, isWished]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx)
    throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
}
