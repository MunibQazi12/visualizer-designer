// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app’s Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBJjwjqhSy_S3jFTHkZAX_g24Lt92OpQjA",
  authDomain: "visulizer-designer.firebaseapp.com",
  databaseURL: "https://visulizer-designer-default-rtdb.firebaseio.com",
  projectId: "visulizer-designer",
  storageBucket: "visulizer-designer.appspot.com",
  messagingSenderId: "411116293551",
  appId: "1:411116293551:web:232796ad04cc7b449a335a",
  measurementId: "G-0NY7SZGG7P",
};

// Initialize Firebase
const FirebaseConf = initializeApp(firebaseConfig);

// Initialize the Firebase database with the provided configuration
export const database = getDatabase(FirebaseConf);

export default FirebaseConf;
// const analytics = getAnalytics(app);
