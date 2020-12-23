import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCkl8Jina2MUn1Rxfo2xcxcsW1YPYk308Y",
  authDomain: "linkedin-eb309.firebaseapp.com",
  projectId: "linkedin-eb309",
  storageBucket: "linkedin-eb309.appspot.com",
  messagingSenderId: "919940853527",
  appId: "1:919940853527:web:8aa81e324ba8644b101152"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);  // connects to firebase
const db = firebaseApp.firestore() //connect to database
const auth = firebase.auth() // access to authentication

export { db, auth } // export db and authentication