import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBtyvWJGeHeu4vG_ZHrPx7nU8hnz2x9elA",
    authDomain: "elibapp-f7bb0.firebaseapp.com",
    projectId: "elibapp-f7bb0",
    storageBucket: "elibapp-f7bb0.appspot.com",
    messagingSenderId: "878495753981",
    appId: "1:878495753981:web:db688ee4ed919055484094"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();