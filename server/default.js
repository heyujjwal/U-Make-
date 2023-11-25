import {products} from './Constants/data.js'
import Product from './model/product-schema.js';
const DefaultData=async()=>{
   try {
      await Product.insertMany(products);

       console.log("Data imported success");
   } catch (error) {
      console.log("error",error.message);
   }
}

export default DefaultData