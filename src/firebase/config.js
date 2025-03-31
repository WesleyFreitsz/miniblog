import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUoSMSFi9Jha-p9zqnBqnAzyKsGLneIGE",
  authDomain: "miniblog-7cfed.firebaseapp.com",
  projectId: "miniblog-7cfed",
  storageBucket: "miniblog-7cfed.firebasestorage.app",
  messagingSenderId: "985253937240",
  appId: "1:985253937240:web:4efc8b4929f3e3672eca2d",
  measurementId: "G-9CYXYYZ1XX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
