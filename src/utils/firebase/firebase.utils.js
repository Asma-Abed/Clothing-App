import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvCTLEiZp-x8YSJHoO061BiAclv2CH_Qs',

  authDomain: 'clothing-app-db-2a505.firebaseapp.com',

  projectId: 'clothing-app-db-2a505',

  storageBucket: 'clothing-app-db-2a505.appspot.com',

  messagingSenderId: '562177042202',

  appId: '1:562177042202:web:c80b68f4b9a4e88389aea3',
};

const firebaseApp = initializeApp(firebaseConfig);
