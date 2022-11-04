import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";

import { Category } from "../../types/shop";

const firebaseConfig = {
  apiKey: "AIzaSyB2Fe3-BhPON1wVsYSix0FEioCYBqeaBkk",
  authDomain: "noise-shop.firebaseapp.com",
  projectId: "noise-shop",
  storageBucket: "noise-shop.appspot.com",
  messagingSenderId: "550950523897",
  appId: "1:550950523897:web:01d2b92596e90698142328"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ObjectToAdd[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category);
};
