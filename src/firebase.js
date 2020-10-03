import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB2bdIz9TZI9jePnN5ivxyxN59lBmyz3FY",
    authDomain: "clone-1474e.firebaseapp.com",
    databaseURL: "https://clone-1474e.firebaseio.com",
    projectId: "clone-1474e",
    storageBucket: "clone-1474e.appspot.com",
    messagingSenderId: "778747711526",
    appId: "1:778747711526:web:b38e7a96dba73c22ced6e7",
    measurementId: "G-9NPMHYLW80"
}) 

const auth = firebase.auth();

export { auth };