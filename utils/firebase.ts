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

const updateProduct = async (productID: string, formData: propData) => {
  const docRef = doc(db, "produits", productID);
  await updateDoc(docRef, {
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
