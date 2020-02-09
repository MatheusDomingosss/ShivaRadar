import firebase from 'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyBQ8NcOxLmlF6G421v5DCKR4C_k6Dru8-Y",
  authDomain: "plataforma-shiva.firebaseapp.com",
  databaseURL: "https://plataforma-shiva.firebaseio.com",
  projectId: "plataforma-shiva",
  storageBucket: "plataforma-shiva.appspot.com",
  messagingSenderId: "319537824618",
  appId: "1:319537824618:web:b61ac2cca88648438c9b13",
  measurementId: "G-JPLW3Z32RZ"
};

export default firebase.initializeApp(firebaseConfig);