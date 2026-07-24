import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Product {
  id: string;
  produit: string;
  prix: number;
  quantite: number;
  image?: string;
}

export interface CartItem extends Product {
  cartQuantity: number;
}

export type WishlistItem = Product;

export interface Client {
  id: string;
  nom?: string;
  email?: string;
  photo?: string;
}

export interface OrderItem {
  id: string;
  produit: string;
  prix: number;
  cartQuantity: number;
}

export interface Order {
  userId: string | null;
  userEmail: string | null;
  items: OrderItem[];
  total: number;
  createdAt: number;
}
