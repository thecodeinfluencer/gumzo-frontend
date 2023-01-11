// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFvthcSBUCR5qcXMeZEKx7GWrgdZ_hT5w',
  authDomain: 'gumzoai.firebaseapp.com',
  projectId: 'gumzoai',
  storageBucket: 'gumzoai.appspot.com',
  messagingSenderId: '838506909752',
  appId: '1:838506909752:web:24c82fc02c78d8dc5196cd',
  measurementId: 'G-9KJHGD0KF7',
};

// Initialize Firebase
// export const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);

// Configure FirebaseUI.
export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/chat',
  signInOptions: [
    // { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
};
