import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "ecommerce-3e7db.firebaseapp.com",
  databaseURL: "https://ecommerce-3e7db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-3e7db",
  storageBucket: "ecommerce-3e7db.appspot.com",
  messagingSenderId: "26762552742",
  appId: "1:26762552742:web:c72393a733937c13829b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
