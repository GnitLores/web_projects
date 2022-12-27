import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmRFyqKaGp7icx4HHnm699LFnlTL7CWcg",

  authDomain: "todo-a85eb.firebaseapp.com",

  projectId: "todo-a85eb",

  storageBucket: "todo-a85eb.appspot.com",

  messagingSenderId: "184755466476",

  appId: "1:184755466476:web:b2f9d114369c32c987f5c9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
