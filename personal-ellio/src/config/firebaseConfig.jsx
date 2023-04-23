import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4-RI8LUzgJ874WD9P4TnInlHz_yJckt4",
  authDomain: "test-f3a60.firebaseapp.com",
  projectId: "test-f3a60",
  storageBucket: "test-f3a60.appspot.com",
  messagingSenderId: "638450813312",
  appId: "1:638450813312:web:70c08d4782ddef99339965",
  measurementId: "G-DMN06J8PE0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
