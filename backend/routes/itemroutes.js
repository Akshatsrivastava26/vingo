import express from "express";
// import { createEditShop } from "../controllers/shop.controllers";
import isAuth from "../middleware/isAuth.js";
import { addItem } from "../controllers/item.controllers.js";
import { upload } from "../middleware/multer.js";
import { editItem } from "../controllers/item.controllers.js";



const itemRouter = express.Router();

itemRouter.post("/add-item",isAuth,upload.single("image"),addItem);
itemRouter.post("/edit-item/:itemId",isAuth,upload.single("image"),editItem);



export default itemRouter;