import { get, ref } from "firebase/database";
import { database, getUserPath } from "./configuration";

const userId = getUserPath(); // Fetch the user path based on your config


export const readData = (path: string) => {
  const dbRef = ref(database, path);
  return get(dbRef);
};


export const readDataWithUserID = (path: string) => {
  // console.log(`${userId}${path}`)
  const dbRef = ref(database, `${userId}${path}`);
  return get(dbRef);
};


// const globalRef = ref(database, `${userId}/globalOptions`);

// useEffect(() => {

//   onValue(globalRef, (snapshot) => {
//     const data = snapshot.val();
//     setGlobalOptions(data || {});
//   });

// }, [globalOptions]);