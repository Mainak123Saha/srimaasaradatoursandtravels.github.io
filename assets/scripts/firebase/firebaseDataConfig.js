// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAlhGxlBveFDx1jORccl17-yRd12q_nan4",
    authDomain: "srimaasaradatoursandtravels.firebaseapp.com",
    projectId: "srimaasaradatoursandtravels",
    storageBucket: "srimaasaradatoursandtravels.appspot.com",
    messagingSenderId: "24733030099",
    appId: "1:24733030099:web:a3a1e1a2f262661ad96626",
    measurementId: "G-1KET6X47GK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
db.settings({timestampInSnapshots: true});