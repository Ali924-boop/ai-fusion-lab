// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-fusion-lab-e8322.firebaseapp.com",
  projectId: "ai-fusion-lab-e8322",
  storageBucket: "ai-fusion-lab-e8322.firebasestorage.app",
  messagingSenderId: "827129898941",
  appId: "1:827129898941:web:7e48ea10447a0c10a554d4",
  measurementId: "G-71N0CLQK4Z"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const db=getFirestore(app);