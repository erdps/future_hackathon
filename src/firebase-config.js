import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmAa5FQzgBEnukghdn4p_eu14DOm70k4w",
  authDomain: "future-hackathons.firebaseapp.com",
  projectId: "future-hackathons",
  storageBucket: "future-hackathons.appspot.com",
  messagingSenderId: "707267599168",
  appId: "1:707267599168:web:3b6b12ab8ec979bc21f8a5",
  measurementId: "G-Q2TK903096"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);