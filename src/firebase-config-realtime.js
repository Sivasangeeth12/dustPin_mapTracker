import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

function StartFirebase()
{
    const firebaseConfig=
    {
        apiKey: "AIzaSyATnN6glOscG9ajx6D836Fihc9p3x-O7jU",
        authDomain: "bitfusion-715cb.firebaseapp.com",
        databaseURL: "https://bitfusion-715cb-default-rtdb.firebaseio.com",
        projectId: "bitfusion-715cb",
        storageBucket: "bitfusion-715cb.appspot.com",
        messagingSenderId: "313288383240",
        appId: "1:313288383240:web:7fc5977054aafaa1da2abd"
    }
    const app=initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default StartFirebase ;