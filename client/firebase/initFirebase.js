// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBSAE_APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvWvuGID1EslzO7NUkmDRWIfQE4ARn_HY",
  authDomain: "jamesyoo-dev.firebaseapp.com",
  databaseURL: "https://jamesyoo-dev-default-rtdb.firebaseio.com",
  projectId: "jamesyoo-dev",
  storageBucket: "jamesyoo-dev.appspot.com",
  messagingSenderId: "746766433294",
  appId: "1:746766433294:web:9eec499667a5f5da4a905f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
// const app = initializeFirebase();
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBSAE_APP_ID,
// };

// export default function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//     console.log("firebase successful");
//   }
// }
