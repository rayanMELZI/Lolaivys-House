"use server";

import { db } from "@/app/firebase/config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

interface propData {
  produit: string;
  prix: number;
  quantite: number;
  image?: string;
}

const addProduct = async (formData: propData) => {
  //   const products = await firebase.firestore().collection("products").get();
  //   return products.docs.map((doc) => doc.data());

  const collRef = collection(db, "produits");
  addDoc(collRef, {
    produit: formData.produit,
    prix: formData.prix,
    quantite: formData.quantite,
    // image: formData.image,
  });
};

const deleteProduct = async (productID: string) => {
  const docRef = doc(db, "produits", productID);
  await deleteDoc(docRef);
};

export { addProduct, deleteProduct };
