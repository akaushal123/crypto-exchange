// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnlzgGJOiEKiekd9KNE8q6nSY83O3rpS0",
    authDomain: "krypt-crypto-exchange.firebaseapp.com",
    projectId: "krypt-crypto-exchange",
    storageBucket: "krypt-crypto-exchange.appspot.com",
    messagingSenderId: "811671365279",
    appId: "1:811671365279:web:bed58293b43bcc065324aa",
    measurementId: "G-HW3H4HCJ4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);