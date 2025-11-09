import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSrQNrVjgw5HgrpP0hVOaCge1Uc9X4-R4",
  authDomain: "newsmind-99a5a.firebaseapp.com",
  projectId: "newsmind-99a5a",
  storageBucket: "newsmind-99a5a.firebasestorage.app",
  messagingSenderId: "783360622116",
  appId: "1:783360622116:web:4643c0236a3ae4fe8422b1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
