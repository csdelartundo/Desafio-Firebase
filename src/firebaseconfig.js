// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqtrpvRZNzPkCNAVbBvzVSzlbu9XXpGVQ",
    authDomain: "crud-datos-usuarios.firebaseapp.com",
    projectId: "crud-datos-usuarios",
    storageBucket: "crud-datos-usuarios.appspot.com",
    messagingSenderId: "373755871774",
    appId: "1:373755871774:web:3db05c26d47020731f240f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
