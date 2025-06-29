import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebase from '../api/firebase';
import TicTacToe from '../TicTacToe';
import SignIn from '../views/SignIn';
import Authenticated from '../views/Authenticated';
import '../styles/App.css';

function Initialize() {
  const [user, setUser] = useState(null);
  const [domWriting, setDomWriting] = useState('Nothing Here!');

  useEffect(() => {
    const auth = getAuth(firebase);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          fullName: firebaseUser.displayName,
          photo: firebaseUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="App">
      <Authenticated user={user} />
      <h2>INSIDE APP COMPONENT</h2>
      <div>
        <button
          type="button"
          id="this-button"
          className="btn btn-info"
          onClick={handleClick}
        >
          I am THIS button
        </button>
      </div>
      <div>
        <button
          type="button"
          id="that-button"
          className="btn btn-primary mt-3"
          onClick={handleClick}
        >
          I am THAT button
        </button>
      </div>
      <h3>{domWriting}</h3>
      <TicTacToe />
    </div>
  );
}

export default Initialize;
