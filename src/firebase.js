import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ3WEG5hlhYqnFtra16Uds4uBXOCGMewA",
  authDomain: "sanze-ae0b2.firebaseapp.com",
  projectId: "sanze-ae0b2",
  storageBucket: "sanze-ae0b2.appspot.com",
  messagingSenderId: "552811836045",
  appId: "1:552811836045:web:802fbc64b0b21d6a6ba8c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
