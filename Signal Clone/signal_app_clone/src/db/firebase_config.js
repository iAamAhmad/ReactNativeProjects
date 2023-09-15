import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAwrSmlmdKSonqw_xUDYYg8jKHVdtpymXI",
    authDomain: "signal-app-96cee.firebaseapp.com",
    projectId: "signal-app-96cee",
    storageBucket: "signal-app-96cee.appspot.com",
    messagingSenderId: "782637654639",
    appId: "1:782637654639:web:e8717e0790a5921467a39a",
    measurementId: "G-8X9V7FCP29"
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
    firebase.initializeApp(firebaseConfig);
}
// const db = app.firebase();
const auth = firebase.auth();

export { auth };