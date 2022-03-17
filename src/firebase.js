// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPOU8neaXa1U6jRSNnzX7jKVUxh0krUqU",
  authDomain: "nust-cyber-club.firebaseapp.com",
  projectId: "nust-cyber-club",
  storageBucket: "nust-cyber-club.appspot.com",
  messagingSenderId: "849904773386",
  appId: "1:849904773386:web:40c557c6a407d63fd9b2f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();