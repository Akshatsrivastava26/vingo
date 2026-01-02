import express from "express";
import { createEditShop } from "../controllers/shop.controllers";
import isAuth from "../middleware/isAuth";
import { upload } from "../middleware/multer";
import { getMyShop } from "../controllers/shop.controllers.js";




const shopRouter = express.Router();

shopRouter.post("/create-edit",isAuth,upload.single("image"),createEditShop);
shopRouter.get("/get-my",isAuth,getMyShop);



export default shopRouter;