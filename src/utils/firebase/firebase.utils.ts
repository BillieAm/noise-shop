import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from "firebase/auth";
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

initializeApp(firebaseConfig);

/* === */
/* AUTHENTICATION WITH GOOGLE */
/* === */

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

type AdditionalInformation = {
  displayName?: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userSnapshot;
};

/* === */
/* AUTHENTICATION WHIT EMAIL AND PASSWORD */
/* === */

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  /* if (!email || !password) return; */

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  /* if (!email || !password) return; */

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

/* === */
/* DATA BASE */
/* === */

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
