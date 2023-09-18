// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import {getFirestore,doc,getDoc}from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
//import {getAuth} from "firebase/auth"
//import firebase from 'firebase/app';
//import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATnN6glOscG9ajx6D836Fihc9p3x-O7jU",
  authDomain: "bitfusion-715cb.firebaseapp.com",
  databaseURL: "https://bitfusion-715cb-default-rtdb.firebaseio.com",
  projectId: "bitfusion-715cb",
  storageBucket: "bitfusion-715cb.appspot.com",
  messagingSenderId: "313288383240",
  appId: "1:313288383240:web:7fc5977054aafaa1da2abd"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
// firebase.initializeApp(firebaseConfig);
// export default firebase;
// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
//export const db=getFirestore(app);
//doc(db,"binItems","collector1" );
//const analytics = getAnalytics(app);
//export const auth=getAuth(app);
//export const database=getFirestore(app);