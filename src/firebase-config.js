import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCj6ABiiZszCamLKSYvI2zgbC3sIcNLINw",
  authDomain: "icantcook-49ee8.firebaseapp.com",
  projectId: "icantcook-49ee8",
  storageBucket: "icantcook-49ee8.appspot.com",
  messagingSenderId: "184576873212",
  appId: "1:184576873212:web:e6b9eeebf6ebb173d63d79",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

