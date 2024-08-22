import { readData } from ".";

const Products = {
  fetchProducts: async (path: string) => {
    const snapshot = await readData(path);
    if (snapshot.exists()) {
      const products = snapshot.val();
      return products
    } else {
      console.log("No data available");
      return [];
    }
  },

  //   onValue(collectionRef, (snapshot) => {
  //     const dataItem = snapshot.val();
  //     if (dataItem) {
  //       // Convert the object values into an array
  //         const products: I_Products[] = Object.values(dataItem);
  //         return products;
  //     }
  //   });
};




export default Products;
