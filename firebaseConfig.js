// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBw9oTCc6dDlju5q-FrgjXssHiTu_bL0M",
    authDomain: "mixtest-c00dc.firebaseapp.com",
    projectId: "mixtest-c00dc",
    storageBucket: "mixtest-c00dc.appspot.com",
    messagingSenderId: "124798656760",
    appId: "1:124798656760:web:6565774b3d6dd8342b5b0d",
    measurementId: "G-QTLJDL8XW4"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase_App);
export const fb_auth = getAuth(Firebase_App);
export const fb_db = getFirestore(Firebase_App);



