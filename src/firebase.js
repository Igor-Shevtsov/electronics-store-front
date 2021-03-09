// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsDOxQOIn83v049zeW7UJ2dAQbAHl7azY",
  authDomain: "electronics-store-on-react.firebaseapp.com",
  projectId: "electronics-store-on-react",
  storageBucket: "electronics-store-on-react.appspot.com",
  messagingSenderId: "290769944822",
  appId: "1:290769944822:web:5b82b1b44a5a5370e1acd7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
