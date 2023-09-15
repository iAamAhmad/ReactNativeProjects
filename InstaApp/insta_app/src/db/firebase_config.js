// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyClQktcdmrynomJafFr9JYKSxRHB015JCE",
    authDomain: "instagram-clone-93a2b.firebaseapp.com",
    projectId: "instagram-clone-93a2b",
    storageBucket: "instagram-clone-93a2b.appspot.com",
    messagingSenderId: "318803679503",
    appId: "1:318803679503:web:30eddb76a62d6a4a3cc67a",
    measurementId: "G-WH9YHBM6YY"
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };