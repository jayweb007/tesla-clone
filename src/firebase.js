import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCms9GT6H9BYEAm2lvtYnRyjnZNw7-sdsA",
  authDomain: "tesla-clone-920d9.firebaseapp.com",
  projectId: "tesla-clone-920d9",
  storageBucket: "tesla-clone-920d9.appspot.com",
  messagingSenderId: "162486812610",
  appId: "1:162486812610:web:c55fcb1aeffb269fdae05b",
  measurementId: "G-WK8YPNLERP",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
