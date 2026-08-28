// Configuración e inicialización de Firebase, compartida por
// agendar.html y mis-citas.html.
//
// Reemplaza los valores de firebaseConfig con los de TU proyecto
// (Firebase console → ⚙️ Configuración del proyecto → tus apps →
// "SDK setup and configuration" → Config). Ver GUIA_SETUP_FIREBASE_CITAS.md, Paso 3.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-check.js";
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

// App Check: verifica que las llamadas a nuestras Cloud Functions vengan de
// esta página real (vía reCAPTCHA Enterprise, invisible para el paciente) y
// no de un script externo. La Site Key es la del key de tipo "Web" creado en
// Google Cloud → Security → Fraud Defense (reCAPTCHA Enterprise), registrado
// también en Firebase Console → App Check con el proveedor "reCAPTCHA
// Enterprise" (ver guía de seguridad).
initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("6LchRZwtAAAAAFIaImMw2TYl5oE0VcVcwfJXj7t9"),
  isTokenAutoRefreshEnabled: true,
});

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
