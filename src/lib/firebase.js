import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCquqaMl1Q8VFtW3h1T8gfh6-ZFXW2QDA", 
  authDomain: "reactchat-3c494.firebaseapp.com",
  projectId: "reactchat-3c494",
  storageBucket: "reactchat-3c494.appspot.com",
  messagingSenderId: "110635252396",
  appId: "1:110635252396:web:016fcdbecf7234fd18fd09"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();