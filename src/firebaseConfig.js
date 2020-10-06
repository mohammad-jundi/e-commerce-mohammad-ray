import * as firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDAzq-8kEjNYsOJlfQNBXnQ0bwMF40IaAY",
    authDomain: "e-commerce-159b2.firebaseapp.com",
    databaseURL: "https://e-commerce-159b2.firebaseio.com",
    projectId: "e-commerce-159b2",
    storageBucket: "e-commerce-159b2.appspot.com",
    messagingSenderId: "563883206288",
    appId: "1:563883206288:web:d0c5e793718db02b5d9a15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
