"use server";

import { db } from "@/app/firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
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

const createUserDocument = async (user: any) => {
  try {
    const defaultProfilePictureUrl =
      "gs://lolaivys-house.appspot.com/defaultPFP.png";

    // await db.collection("utilisateurs").doc(user.uid).set({
    //   photo: defaultProfilePictureUrl,
    // });
    await addDoc(collection(db, "utilisateurs"), {
      photo: defaultProfilePictureUrl,
    }); // GHALTAAAAAA  MARAHICH DIR ID == USER.UID <============================================================
    // const collRef = collection(db, "utilisateurs");
    // await addDoc(collRef, {
    //   photo: defaultProfilePictureUrl,
    // });

    console.log("User document created successfully");
  } catch (error) {
    console.error("Error creating user document:", error);
  }
};

export { addProduct, deleteProduct, updateProduct, createUserDocument };
