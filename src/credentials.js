// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1VSDqMI012wpHl8-ax6t_KLUixxpv5hs",
  authDomain: "sedrp-ee9e8.firebaseapp.com",
  projectId: "sedrp-ee9e8",
  storageBucket: "sedrp-ee9e8.appspot.com",
  messagingSenderId: "135495214414",
  appId: "1:135495214414:web:46d36a556af2f7d1256a1f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;