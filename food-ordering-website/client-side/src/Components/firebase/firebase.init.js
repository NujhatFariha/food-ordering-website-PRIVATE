import { initializeApp } from "firebase/app";
import firebaseConfig from '../firebase/firebase.config';

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;