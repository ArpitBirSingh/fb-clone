import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA19vqKlggSI95F1bbQ25ON9mVwFoi9dMg",
  authDomain: "fb-clone-4b7b3.firebaseapp.com",
  projectId: "fb-clone-4b7b3",
  storageBucket: "fb-clone-4b7b3.appspot.com",
  messagingSenderId: "243099658140",
  appId: "1:243099658140:web:6279266ffeaf88583f0a59",
  measurementId: "G-9SPHHH8H62"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
 console.log("here is the database object >>>>>>>>>>",db);
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
