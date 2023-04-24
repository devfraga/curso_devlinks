
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwbQu0t60NbHWYNYZxkY-2z4ZnmDuKXUU",
  authDomain: "reactlinks-ee077.firebaseapp.com",
  projectId: "reactlinks-ee077",
  storageBucket: "reactlinks-ee077.appspot.com",
  messagingSenderId: "582662035243",
  appId: "1:582662035243:web:7f93dc0adc4a8a9a05d76e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };