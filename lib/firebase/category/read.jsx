"use client";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

export function useCategories() {
  const { data, error } = useSWRSubscription(
    ["categories"],
    ([path], { next }) => {
      const ref = collection(db, path);

      const unSub = onSnapshot(
        ref,
        (snaps) => {
          next(
            null,
            snaps.docs.map((doc) => doc.data())
          );
        },
        (err) => {
          next(err?.message);
        }
      );

      return () => unSub();
    }
  );

  return {
    data,
    isLoading: data === "undefined" ? true : false,
    error,
  };
}

export const getCategory = async (id) => {
  return await getDoc(doc(db, `categories/${id}`));
};
