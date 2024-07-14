import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSNwgNcmrQmN5vFRs2drXoL8Mlwgy35Bg",
  authDomain: "abhishekgarg-portfolio.firebaseapp.com",
  projectId: "abhishekgarg-portfolio",
  storageBucket: "abhishekgarg-portfolio.appspot.com",
  messagingSenderId: "458633951985",
  appId: "1:458633951985:web:2b047a592ad0a1cef84750"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 