import { db } from "../../firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export const createNewCategory = async ({ data }) => {
  if (!data?.name) {
    throw new Error("Category name is required.");
  }
  if (!data?.slug) {
    throw new Error("Category slug is required.");
  }

  const firebaseRef = doc(db, `categories/${data?.slug}`);

  await setDoc(firebaseRef, {
    ...data,
    id: data?.slug,
    timestamp: Timestamp.now(),
  });
};
