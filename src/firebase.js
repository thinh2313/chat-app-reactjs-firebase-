// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBq5KOJp5Pn143RZE6XBhy7WW59iNXiguw",
    authDomain: "chat-2d830.firebaseapp.com",
    projectId: "chat-2d830",
    storageBucket: "chat-2d830.appspot.com",
    messagingSenderId: "450152149582",
    appId: "1:450152149582:web:fccb6b5d8970fc5447091f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// Create a root reference
export const storage = getStorage();
export const db = getFirestore()