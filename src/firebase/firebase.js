import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD725GMoNt31SYisUC8yr8GCx-ZWO97XI8",
    authDomain: "lesson24-b1aeb.firebaseapp.com",
    projectId: "lesson24-b1aeb",
    storageBucket: "lesson24-b1aeb.appspot.com",
    messagingSenderId: "699326673775",
    appId: "1:699326673775:web:540e92812edc84f6442e9a"
};
const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

export {app, db, storage, auth, firebaseConfig}

