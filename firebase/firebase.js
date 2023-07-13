import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHYdSSGjG3FP1L4zt8aS0Ll5_ePujyN64",
  authDomain: "fir-chat-app-eb0f3.firebaseapp.com",
  projectId: "fir-chat-app-eb0f3",
  storageBucket: "fir-chat-app-eb0f3.appspot.com",
  messagingSenderId: "423843984778",
  appId: "1:423843984778:web:e1c41a5baec3598d4d4473",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
