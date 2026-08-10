// Configuración e inicialización de Firebase, compartida por
// agendar.html y mis-citas.html.
//
// Reemplaza los valores de firebaseConfig con los de TU proyecto
// (Firebase console → ⚙️ Configuración del proyecto → tus apps →
// "SDK setup and configuration" → Config). Ver GUIA_SETUP_FIREBASE_CITAS.md, Paso 3.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCdrmkYqjaWLTVXdmDUfNBnlRoICnvK2_E",
  authDomain: "citas-dra-susana.firebaseapp.com",
  projectId: "citas-dra-susana",
  storageBucket: "citas-dra-susana.firebasestorage.app",
  messagingSenderId: "630801524494",
  appId: "1:630801524494:web:4a52a570b8706f7b51595f",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app, "us-central1");

export {
  doc,
  getDoc,
  httpsCallable,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
