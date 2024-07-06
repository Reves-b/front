//  import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCL8_Z-Sj-76em_WYUlRql0kFaGrXV3O9E",
  authDomain: "reves-boutique.firebaseapp.com",
  projectId: "reves-boutique",
  storageBucket: "reves-boutique.appspot.com",
  messagingSenderId: "730499897867",
  appId: "1:730499897867:web:aee50d7d461d6f46e0850e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 firebase.initializeApp(firebaseConfig);
 
 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();