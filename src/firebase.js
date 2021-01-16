import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcYgXgl5R9mCOJNlKGx2qFUBGXCq7Jk2U",
  authDomain: "instagram-clone-react-50081.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-50081-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-50081",
  storageBucket: "instagram-clone-react-50081.appspot.com",
  messagingSenderId: "246288836889",
  appId: "1:246288836889:web:3657f1d0416ea30590bd88",
  measurementId: "G-NPZLY34TE3"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };