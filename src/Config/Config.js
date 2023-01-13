import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAtAPKn_pQhAjlqFax_-7vYek7gcglOCJY",
    authDomain: "ecom1-20fbe.firebaseapp.com",
    projectId: "ecom1-20fbe",
    storageBucket: "ecom1-20fbe.appspot.com",
    messagingSenderId: "601683427469",
    appId: "1:601683427469:web:0addf8449c0bbe0f98e2c4"
  };
// Initialize Firebase
const app =initializeApp(firebaseConfig); 
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);
export {app, db, storage, auth};
