import express from "express";
import { createEditShop } from "../controllers/shop.controllers";
import isAuth from "../middleware/isAuth";
import { addItem } from "../controllers/item.controllers";
import { upload } from "../middleware/multer";



const itemRouter = express.Router();

itemRouter.post("/add-item",isAuth,upload.single("image"),addItem);
itemRouter.post("/edit-item/:itemId",isAuth,upload.single("image"),editItem);



export default itemRouter;