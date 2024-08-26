// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app’s Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DATABASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DATABASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_DATABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_DATABASE_MESSAGING_SENDER_ID,
  appId:process.env.NEXT_PUBLIC_DATABASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_DATABASE_MEASUREMENT_ID,
};

// Initialize Firebase
const FirebaseConf = initializeApp(firebaseConfig);

// Initialize the Firebase database with the provided configuration
export const database = getDatabase(FirebaseConf);

export default FirebaseConf;
// const analytics = getAnalytics(app);
