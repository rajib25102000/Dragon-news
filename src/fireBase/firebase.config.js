// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUwGE1pnp6BgxNAqSxjKp3hMyACOBQrM",
  authDomain: "dragon-news-c8874.firebaseapp.com",
  projectId: "dragon-news-c8874",
  storageBucket: "dragon-news-c8874.firebasestorage.app",
  messagingSenderId: "782859594116",
  appId: "1:782859594116:web:194b07fb1ebf8615be95d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app