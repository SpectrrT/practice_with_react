import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import firebase from './firebase';

// These helpers allow you to login and out of FB auth with Google. These are Firebase methods and is broilerplate code.

const auth = getAuth(firebase);

const signInUser = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const signOutUser = () => new Promise((resolve, reject) => {
  signOut(auth).then(resolve).catch(reject);
});

export { signInUser, signOutUser };
