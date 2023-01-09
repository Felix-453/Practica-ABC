import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBC2Qv7JPAKpH7eFsXehPR6KPzl1Yl6LEs",
    authDomain: "abc-practica.firebaseapp.com",
    projectId: "abc-practica",
    storageBucket: "abc-practica.appspot.com",
    messagingSenderId: "501307632011",
    appId: "1:501307632011:web:0159405d4e6249f18d278e"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;


