import express from "express"
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authroutes.js";
import userRouter from "./routes/userroutes.js";
import shopRouter from "./routes/shoproutes.js";
import itemRouter from "./routes/itemroutes.js";


import cors from "cors";
const app = express();
const port = process.env.PORT || 8000;
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter);
app.use("/api/shop",shopRouter);
app.use("/api/item",itemRouter);


app.get("/",(req,res)=>{
    res.send("Vingo server is running");
});
app.listen(port, () => {
    connectDb()
  console.log(`Server is running on port: ${port}`);
});