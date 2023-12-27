import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1FMRHaKR9OoCzoWO1ns9tBPOTCgW_Fls",
    authDomain: "react-curso-zero.firebaseapp.com",
    projectId: "react-curso-zero",
    storageBucket: "react-curso-zero.appspot.com",
    messagingSenderId: "982485372624",
    appId: "1:982485372624:web:5297edaf8826b84e3998d5",
    measurementId: "G-R8T3YC755T"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export {db,auth};
