import firebase from "firebase/app";
import "forebase/auth";
import "forebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyDh61-yw7maHYVsW2D98DR_98SYmMIDoXI",
  authDomain: "lolaivys-house.firebaseapp.com",
  projectId: "lolaivys-house",
  storageBucket: "lolaivys-house.appspot.com",
  messagingSenderId: "43005558600",
  appId: "1:43005558600:web:1ab27edf39abc2cd3b7d7d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
