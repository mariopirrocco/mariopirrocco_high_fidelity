import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA6bc0Wx6Dv7L-a9ZtgJM0yXcz17jgWxiU",
  authDomain: "coderhouse-react-d5448.firebaseapp.com",
  projectId: "coderhouse-react-d5448",
  storageBucket: "coderhouse-react-d5448.appspot.com",
  messagingSenderId: "955371893326",
  appId: "1:955371893326:web:a25224e2669673e53f891f"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

