// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpSvxPuCcpZDILi3saBoRLe2uO8lxne8w",
  authDomain: "job-portal-ayokerja.firebaseapp.com",
  projectId: "job-portal-ayokerja",
  storageBucket: "job-portal-ayokerja.appspot.com",
  messagingSenderId: "729620349560",
  appId: "1:729620349560:web:ece608164fdd834870e38d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;