// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiU0iORZojuveDWJnV2chPIfp-1mB-ZJQ",
  authDomain: "mymap-c5107.firebaseapp.com",
  projectId: "mymap-c5107",
  storageBucket: "mymap-c5107.appspot.com",
  messagingSenderId: "295163314290",
  appId: "1:295163314290:web:7e460202e7780904f802eb",
  measurementId: "G-PMT6C09RJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const database=getFirestore(app);