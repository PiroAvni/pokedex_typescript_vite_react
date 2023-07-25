import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHioaCd2gAA0DhpUtZEMsKMeHzICsKX7M",
    authDomain: "pokedex-6e89f.firebaseapp.com",
    projectId: "pokedex-6e89f",
    storageBucket: "pokedex-6e89f.appspot.com",
    messagingSenderId: "828980014878",
    appId: "1:828980014878:web:83dc312138cf411cc1e30f",
    measurementId: "G-SN2RXD1NBM"
  };
  
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");