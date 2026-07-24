import { storage } from "@/app/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

/**
 * Uploads a product image to Firebase Storage and returns its public URL.
 * Runs on the client because it consumes a browser File object.
 */
export async function uploadProductImage(file: File): Promise<string> {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `produits/${Date.now()}-${safeName}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
