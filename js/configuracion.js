import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDLIT7XuMeWEVWin80mH93ai16cntKpUZk",
    authDomain: "database-cgc.firebaseapp.com",
    projectId: "database-cgc",
    storageBucket: "database-cgc.appspot.com",
    messagingSenderId: "420376008648",
    appId: "1:420376008648:web:4c7ba0a1bf7861801192fd",
    measurementId: "G-04XH4B1Q5C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
