// src/firebase/firebaseConfig.ts

import {FirebaseOptions, initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyB0g0pCoIM7J3QqSKgbWwIA0gfoQIGLcI0',
  authDomain: 'fir-c91ed.firebaseapp.com',
  projectId: 'fir-c91ed',
  storageBucket: 'fir-c91ed.appspot.com',
  messagingSenderId: '634675205504',
  appId: '1:634675205504:android:06f31d442c1c9ddc191d65',
  measurementId: 'G-Q93Q1J89YY',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore};