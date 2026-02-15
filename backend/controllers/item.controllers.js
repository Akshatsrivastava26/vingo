import Shop from "../models/shop.model.js";
import Item from "../models/item.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



export const addItem=async (req,res)=>{
    try {
        const {name, category,foodType, price}=req.body;
        let image;
        if(req.file){
            image=await uploadOnCloudinary(req.file.path);
        }
        const shop=await Shop.findOne({owner:req.userId});
        if(!shop){
            return res.status(400).json({message:"Shop not found"});
        }
        const item = await Item.create({
            name, category,foodType, price, image, shop:shop._id
        })
        
        // Add item to shop's items array
        shop.items.push(item._id);
        await shop.save();
        
        // Populate and return the updated shop
        (await shop.populate('owner')).populate({owner:req.userId}).populate({
            path:"items",
            options:{sort:{updatedAt:-1}}
        })
        return res.status(201).json(shop);
    } catch (error) {
         return res.status(500).json({message:`Add item error ${error}`});
    }
}

export const editItem=async (req,res)=>{
    try {
        const itemId=req.params.itemId;
        const {name, category,foodType, price}=req.body;
        let image;
        if(req.file){
            image=await uploadOnCloudinary(req.file.path);
        }
        const item=await Item.findByIdAndUpdate(itemId,{
            name, category,foodType, price, image
        },{new:true})
        if(!item){
            return res.status(400).json({message:"Item not found"});
        }
        const shop=await Shop.findOne({owner:req.userId}).populate({
            path:"items",
            options:{sort:{updatedAt:-1}}
        })
        return res.status(200).json(item);
    } catch (error) {
         return res.status(500).json({message:`Edit item error ${error}`});
    }
}

export const getItemById=async (req,res)=>{
    try {
        const itemId = req.params.itemId;
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(400).json({ message: "Item not found" });
        }
        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).json({ message: `Get item error ${error}` });
    }
}
