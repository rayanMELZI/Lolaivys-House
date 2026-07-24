"use server";

import { db } from "@/app/firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

interface propData {
  produit: string;
  prix?: number;
  quantite?: number;
  image?: string;
}

const addProduct = async (formData: propData) => {
  const collRef = collection(db, "produits");
  await addDoc(collRef, {
    produit: formData.produit,
    prix: formData.prix,
    quantite: formData.quantite,
    image: formData.image ?? null,
  });
};

const updateProduct = async (productID: string, formData: propData) => {
  const docRef = doc(db, "produits", productID);
  const data: { [key: string]: string | number | undefined } = {
    produit: formData.produit,
    prix: formData.prix,
    quantite: formData.quantite,
  };
  // Only overwrite the image when a new one was provided.
  if (formData.image !== undefined) data.image = formData.image;
  await updateDoc(docRef, data);
};

const deleteProduct = async (productID: string) => {
  const docRef = doc(db, "produits", productID);
  await deleteDoc(docRef);
};

interface NewUser {
  uid: string;
  nom?: string;
  email?: string | null;
}

const createUserDocument = async (user: NewUser) => {
  try {
    const defaultProfilePictureUrl =
      "https://alternative.me/images/avatars/default.png";

    // Use the auth uid as the document id so the profile is addressable.
    await setDoc(doc(db, "utilisateurs", user.uid), {
      uid: user.uid,
      nom: user.nom ?? "",
      email: user.email ?? "",
      photo: defaultProfilePictureUrl,
      createdAt: Date.now(),
    });

    console.log("User document created successfully");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
};

export { addProduct, deleteProduct, updateProduct, createUserDocument };
