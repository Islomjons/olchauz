import firebase from "firebase";
import "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDT_wrE8Bt6nkT6Q9Zh6Kr6bGG7Cls2Vm8",
    authDomain: "olchauz-32c7b.firebaseapp.com",
    projectId: "olchauz-32c7b",
    storageBucket: "olchauz-32c7b.appspot.com",
    messagingSenderId: "613095412320",
    appId: "1:613095412320:web:0b983f6ef76d9cb8a66905",
    measurementId: "G-B1V33Z0Z02"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, backend}