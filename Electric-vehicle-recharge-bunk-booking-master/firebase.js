// Import Firebase SDK and configure Firebase project
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAERd9ZrQ9B3npKMmsW1NaJOazU3iGaVzI",
  authDomain: "ev-charging-app-91906.firebaseapp.com",
  projectId: "ev-charging-app-91906",
  storageBucket: "ev-charging-app-91906.appspot.com",
  messagingSenderId: "7946463719",
  appId: "1:7946463719:web:4cff66bd24653d8caf3542",
  measurementId: "G-LJDQHS5XYN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
