import { initializeApp } from 'firebase/app';
import firebaseConfig from './apiKeys';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
