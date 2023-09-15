import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCKnt3mVriU1Uvycl8yhXfCW2ZHlchdHhk",
    authDomain: "uber-eats-clone-354005.firebaseapp.com",
    projectId: "uber-eats-clone-354005",
    storageBucket: "uber-eats-clone-354005.appspot.com",
    messagingSenderId: "911562145836",
    appId: "1:911562145836:web:086b3e447e17c2fd2f9189",
    measurementId: "G-SCSXD2QS1M"
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };