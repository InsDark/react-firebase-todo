import {initializeApp} from  "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDX7cKhaTxJd-IrpYJvbQfIqxn7BDy1kvE",
    authDomain: "react-firebase-todo-bc13c.firebaseapp.com",
    projectId: "react-firebase-todo-bc13c",
    storageBucket: "react-firebase-todo-bc13c.appspot.com",
    messagingSenderId: "254051495367",
    appId: "1:254051495367:web:d6377cc49d4c3a070afde2"
  };
  
const app = initializeApp(firebaseConfig);

// export const db = firebase.firestore()
const db = getFirestore(app)
export default db
