// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";

import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_DATABASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_DATABASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_DATABASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_DATABASE_MESSAGING_SENDER_ID,
//   appId:process.env.NEXT_PUBLIC_DATABASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_DATABASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBqRFeMfbOwdynLmcJ0-kT4vUhbDr7MQ64",
  authDomain: "archilabs-ai.firebaseapp.com",
  databaseURL: "https://archilabs-ai-default-rtdb.firebaseio.com",
  projectId: "archilabs-ai",
  storageBucket: "archilabs-ai.appspot.com",
  messagingSenderId: "1071061223684",
  appId: "1:1071061223684:web:75bf4137b342d039bfa851",
  measurementId: "G-TLXMXWN00G",
};


// Initialize Firebase
const FirebaseConf = initializeApp(firebaseConfig);

// Initialize the Firebase database with the provided configuration
export const database = getDatabase(FirebaseConf);
// Reference to the root of the database
export const databaseReference = ref(database);

export const grabAllData = () => {
  get(child(databaseReference, `/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log("allData", snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

}

grabAllData();



export const storage = getStorage(FirebaseConf);
export const auth = getAuth(FirebaseConf);

let userPath = "anonymous/";

// Function to initialize the listener for auth state changes
export const initializeAuthListener = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            userPath = `${user.uid}/`;
        } else {
            userPath = `anonymous/`;
        }
    });
};

// Reference the variable `userPath` elsewhere in your code
export const getUserPath = () => userPath;

export const generateUUID = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        },
    );
};


export default FirebaseConf;
// const analytics = getAnalytics(app);