import { getDatabase, ref, set } from "firebase/database";
import {ActiveProducts, DefaultProducts, FeaturesElements, Products} from "@/utils/products-array";
import FirebaseConf from "@/services/firebase/configuration";

export const createProductsCollection = () => {
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


export const createDefaultProductsCollection = () => {
  const database = getDatabase(FirebaseConf);

  // Reference the "collection" (node) you want to create
  const collectionRef = ref(database, "DefaultProducts");

  // Set data to the collection
  set(collectionRef, DefaultProducts)
    .then(() => {
      console.log("Collection created successfully!");
    })
    .catch((error) => {
      console.error("Error creating collection: ", error);
    });
};

export const createActiveProductsCollection = () => {
  const database = getDatabase(FirebaseConf);

  // Reference the "collection" (node) you want to create
  const collectionRef = ref(database, "ActiveProducts");

  // Set data to the collection
  set(collectionRef, ActiveProducts)
    .then(() => {
      console.log("Collection created successfully!");
    })
    .catch((error) => {
      console.error("Error creating collection: ", error);
    });
};

export const createFeaturesElementsCollection = () => {
  const database = getDatabase(FirebaseConf);

  // Reference the "collection" (node) you want to create
  const collectionRef = ref(database, "FeaturesElements");

  // Set data to the collection
  set(collectionRef, FeaturesElements)
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
