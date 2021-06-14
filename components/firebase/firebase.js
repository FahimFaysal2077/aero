import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiJ1olccG_HnVyRWlbiJCHp3mXOdRXtkw",
    authDomain: "aero-fahim.firebaseapp.com",
    projectId: "aero-fahim",
    storageBucket: "aero-fahim.appspot.com",
    messagingSenderId: "880683034948",
    appId: "1:880683034948:web:9d257e83c5736af1948f11"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }
  else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

   export { db, auth };
