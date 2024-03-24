import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMk5PZ8sW9KM-daQjCdzvWmESbcpSIcgk",
  authDomain: "game-fusion-6a9e7.firebaseapp.com",
  projectId: "game-fusion-6a9e7",
  storageBucket: "game-fusion-6a9e7.appspot.com",
  messagingSenderId: "264320927386",
  appId: "1:264320927386:web:d1d6b998d0f108f1ec4123",
  measurementId: "G-PHNP90GYHC"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {app, auth};