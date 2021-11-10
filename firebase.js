// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDLWhyyMs_is34m-mMM66axyrEbO17Bis",
  authDomain: "uber-clone-bdfac.firebaseapp.com",
  projectId: "uber-clone-bdfac",
  storageBucket: "uber-clone-bdfac.appspot.com",
  messagingSenderId: "57484813826",
  appId: "1:57484813826:web:364089d73bff90a06c291b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }   
