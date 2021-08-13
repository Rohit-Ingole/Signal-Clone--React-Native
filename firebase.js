import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5GVcyloylVcITTJjI3aia15Q3QiAyjuQ",
  authDomain: "signal-clone-rn-48831.firebaseapp.com",
  projectId: "signal-clone-rn-48831",
  storageBucket: "signal-clone-rn-48831.appspot.com",
  messagingSenderId: "1083702598236",
  appId: "1:1083702598236:web:aa5a716093d0e88845e499",
  measurementId: "G-EH8ESGPWSB",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
