import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyBsPlExdtHPvOZoucY-G82UnZmbsu9tavo",
  authDomain: "athanasia-e94fe.firebaseapp.com",
  projectId: "athanasia-e94fe",
  storageBucket: "athanasia-e94fe.appspot.com",
  messagingSenderId: "346306392569",
  appId: "1:346306392569:web:91c49aacc2cf00c7660d28",
  measurementId: "G-BEVSC06NBR",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
