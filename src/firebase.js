// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaS2641HLHDWPh3xnwvSVpNFKvkqr0Ywk",
  authDomain: "faji-appdev.firebaseapp.com",
  databaseURL: "https://faji-appdev-default-rtdb.firebaseio.com",
  projectId: "faji-appdev",
  storageBucket: "faji-appdev.appspot.com",
  messagingSenderId: "897156129506",
  appId: "1:897156129506:web:06ba5569fddd42ad4474bb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;