import { get, ref } from "firebase/database";
import { database } from "./configuration";

export const readData = (path: string) => {
  const dbRef = ref(database, path);
  return get(dbRef);
};