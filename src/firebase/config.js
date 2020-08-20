import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2oQ7xCp2AtCu3oU6j4KgbIQZEjRP7gwE",
    authDomain: "firegram-81436.firebaseapp.com",
    databaseURL: "https://firegram-81436.firebaseio.com",
    projectId: "firegram-81436",
    storageBucket: "firegram-81436.appspot.com",
    messagingSenderId: "730542103102",
    appId: "1:730542103102:web:29870dd794273100c1cf6f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };