import { createcontact,} from "../controller/Contactcontroller.js";
import express from"express";
const router = express.Router();
router.post("/add",createcontact);
// router.get("/list",ListContact);
// router.get("/findbyuser/:id",FindContactById);
// router.delete("/delete/:id",deleteContactById);
// router.put("/update/:id",updateContactById);
// // router.put("/updateProduct/:productId",UpdateProduct);
// router.delete("/deleteProduct/:id",DeleteProduct);


export default router;
