import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgqEJj0cahJQ4-DmYPApBpBFtT7OKjauU",
  authDomain: "blog-c8864.firebaseapp.com",
  projectId: "blog-c8864",
  storageBucket: "blog-c8864.appspot.com",
  messagingSenderId: "161493492035",
  appId: "1:161493492035:web:88575b2130aaa12d7e8ff6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
