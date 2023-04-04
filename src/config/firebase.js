import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyCHRf47JSo8AVw1uIPHeKoms7KU_-frTIQ",
  authDomain: "tiktok---rk.firebaseapp.com",
  projectId: "tiktok---rk",
  storageBucket: "tiktok---rk.appspot.com",
  messagingSenderId: "179752842198",
  appId: "1:179752842198:web:15d58d6c0b487f24acea77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;