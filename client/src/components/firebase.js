// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,signOut as firebaseSignOut} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlqX3qzQd9jR74-DlHGQ-EoQbDuR4dtLQ",
  authDomain: "authentication-aa3b2.firebaseapp.com",
  projectId: "authentication-aa3b2",
  storageBucket: "authentication-aa3b2.appspot.com",
  messagingSenderId: "65395974258",
  appId: "1:65395974258:web:f75f45b39973e6466ce2eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    // Handle sign-out errors
    console.error('Error signing out:', error);
  }
};

export {auth,signOut}

