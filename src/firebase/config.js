import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDajIgf_ZGRU80DUgz991DOx-A8rfBe1_A",
    authDomain: "rawnawk-firegram.firebaseapp.com",
    projectId: "rawnawk-firegram",
    storageBucket: "rawnawk-firegram.appspot.com",
    messagingSenderId: "1060371753692",
    appId: "1:1060371753692:web:f8241ce17411f1481da219"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }