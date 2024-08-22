import { getDatabase, ref, set } from "firebase/database";
import Products from "@/utils/products-array";
import FirebaseConf from "@/services/firebase/configuration";

export const createCollection = () => {
  const database = getDatabase(FirebaseConf);

  // Reference the "collection" (node) you want to create
  const collectionRef = ref(database, "products");

  // Set data to the collection
  set(collectionRef, Products)
    .then(() => {
      console.log("Collection created successfully!");
    })
    .catch((error) => {
      console.error("Error creating collection: ", error);
    });
};

//   Call the function to create the collection
// createCollection();
// set(ref(database, 'products'), Products);
