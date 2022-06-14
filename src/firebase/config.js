import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOn0TAmhHqWVlAZ0zQF3rA2eGhhWKjsT0",
  authDomain: "recipe-recommendation-system.firebaseapp.com",
  projectId: "recipe-recommendation-system",
  storageBucket: "recipe-recommendation-system.appspot.com",
  messagingSenderId: "483177726453",
  appId: "1:483177726453:web:cc3f1e8e85304e9da760bc"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };