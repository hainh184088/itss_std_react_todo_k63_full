import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6bh2p6Qq0OQyZTvnsY575BHDOyv_G_jI",
  authDomain: "itss-todo-application.firebaseapp.com",
  projectId: "itss-todo-application",
  storageBucket: "itss-todo-application.appspot.com",
  messagingSenderId: "450140410841",
  appId: "1:450140410841:web:7369b81033fc2e94787fc8"
};

firebase.initializeApp(firebaseConfig);