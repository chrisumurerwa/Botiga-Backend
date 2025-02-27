import configureMulter from '../utilis/multer.js';
import  router from './ContactRoute.js';
import ProductRouter from './ProductRoute.js';
import routers from './ProductRoute.js';

import express from"express";

const MainRouter = express.Router();

//const upload = configureMulter();

// MainRouter.use("/contact",);
MainRouter.use("/product",ProductRouter);

export default MainRouter;