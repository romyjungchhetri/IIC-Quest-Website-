import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDIswQY6F3VUiuQYLbzIdHZclHKGKAzD2s",
  authDomain: "iicquest-640b8.firebaseapp.com",
  projectId: "iicquest-640b8",
  storageBucket: "iicquest-640b8.firebasestorage.app",
  messagingSenderId: "625130670662",
  appId: "1:625130670662:web:eebdf4dc989b5d1eab1847",
  measurementId: "G-CMXG9T6WR7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { app, analytics };
