import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyB_6sKVlkyudxoQbmKGpzXicctZExVvoTA",
  authDomain: "qtpq-344115.firebaseapp.com",
  projectId: "qtpq-344115",
  storageBucket: "qtpq-344115.appspot.com",
  messagingSenderId: "807006663687",
  appId: "1:807006663687:web:7022a02c36de42092c26a2",
  measurementId: "G-Z4JW0Z9GN8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
