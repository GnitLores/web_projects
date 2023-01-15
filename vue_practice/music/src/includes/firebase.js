import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCG-nDIRmuuYwQZ_9Hqt4n9vcMvhYNnK0g",
  authDomain: "music-1a469.firebaseapp.com",
  projectId: "music-1a469",
  storageBucket: "music-1a469.appspot.com",
  messagingSenderId: "806949203619",
  appId: "1:806949203619:web:f678fe9177025fb67f1916",
};

export default firebase.initializeApp(firebaseConfig);
