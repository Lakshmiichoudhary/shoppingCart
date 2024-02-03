// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXvDZmLg9lEC24zM_6HMm0z2YiOPIgMWo",
  authDomain: "shoppingcart-cbc4f.firebaseapp.com",
  projectId: "shoppingcart-cbc4f",
  storageBucket: "shoppingcart-cbc4f.appspot.com",
  messagingSenderId: "251611838550",
  appId: "1:251611838550:web:673a30ec65c08ea9dea3f7",
  measurementId: "G-TJ20278FPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);