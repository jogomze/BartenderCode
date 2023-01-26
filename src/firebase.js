// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo9N1Ren3PpOjBm3lH0O0B6C2ODl3o958",
  authDomain: "bartendercode-f7a92.firebaseapp.com",
  projectId: "bartendercode-f7a92",
  storageBucket: "bartendercode-f7a92.appspot.com",
  messagingSenderId: "536435893906",
  appId: "1:536435893906:web:faea016ddb4ce2d82ea84b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;