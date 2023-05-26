// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMYLgr9yhOcMZuwztVGA0Qdm8dNlnG6Lc",
  authDomain: "server-assigment.firebaseapp.com",
  projectId: "server-assigment",
  storageBucket: "server-assigment.appspot.com",
  messagingSenderId: "728387685230",
  appId: "1:728387685230:web:0d8f3d065343a8e56f4f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;