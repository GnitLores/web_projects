import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeKmNGVIieLM3uBWVBNE-q1bszHAC3Ypw',
  authDomain: 'notepad-6feef.firebaseapp.com',
  projectId: 'notepad-6feef',
  storageBucket: 'notepad-6feef.appspot.com',
  messagingSenderId: '628307033517',
  appId: '1:628307033517:web:9f9ab4bcb218828a447524',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
