// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


 const firebaseConfig = {
  apiKey: "AIzaSyCIHrEF6Uu8TK6nYLoLINvI6QUyNemgIhk",
  authDomain: "vip-rentals-72734.firebaseapp.com",
  projectId: "vip-rentals-72734",
  storageBucket: "vip-rentals-72734.firebasestorage.app",
  messagingSenderId: "365674161414",
  appId: "1:365674161414:web:361b6ad3c7d82dc86a6a87"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
