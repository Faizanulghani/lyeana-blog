import { db } from "../../firebase";
import { deleteDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";

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

export const updateCategory = async ({ data }) => {
  if (!data?.name) {
    throw new Error("Name is undefined");
  }
  if (!data?.slug) {
    throw new Error("Slug is undefined");
  }

  const firestoreRef = doc(db, `categories/${data?.id}`);

  await updateDoc(firestoreRef, {
    ...data,
    timestamp: Timestamp.now(),
  });
};

export const deleteCategory = async (id) => {
  if (!id) {
    throw new Error("Id is required");
  }
  await deleteDoc(doc(db, `categories/${id}`));
};
