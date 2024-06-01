// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Lv8dEtEja2dhTj1xCUcAXRUED7owFl0",
  authDomain: "misilahululum-6bd7d.firebaseapp.com",
  projectId: "misilahululum-6bd7d",
  storageBucket: "misilahululum-6bd7d.appspot.com",
  messagingSenderId: "311799712029",
  appId: "1:311799712029:web:eef5e4c25c817097b439f4",
  measurementId: "G-9285ZG0C27"
}

// Initialize Firebase
const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const firestore = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { app, firestore, auth, storage }