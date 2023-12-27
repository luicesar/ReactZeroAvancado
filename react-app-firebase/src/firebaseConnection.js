import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "xxxxxxxxx",
    authDomain: "domain-your.firebaseapp.com",
    projectId: "domain-your",
    storageBucket: "domain-your.appspot.com",
    messagingSenderId: "99999999999",
    appId: "1:xxxxxxxxxx:web:yyyyyyyy",
    measurementId: "G-xxxxx"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export {db,auth};
