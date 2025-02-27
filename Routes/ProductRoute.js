import { createProduct,listProduct,updateproductById} from "../controller/Productcontroller.js";

import  configureMulter from "../utilis/multer.js"
import express from"express";

const ProductRouter = express();
const upload = configureMulter();
ProductRouter.post("/createProduct", upload ,createProduct);
ProductRouter.get("/listProduct",listProduct);  
ProductRouter.put("/updateproductById",updateproductById);
// ProductRouter.delete("/deleteproductById/:id",deleteproductById);           


export default ProductRouter;
