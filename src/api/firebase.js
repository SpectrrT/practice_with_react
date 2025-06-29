import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './apiKeys';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
