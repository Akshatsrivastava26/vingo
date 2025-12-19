import express from "express"
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authroutes.js";
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

app.get("/",(req,res)=>{
    res.send("Vingo server is running");
});
app.listen(port, () => {
    connectDb()
  console.log(`Server is running on port: ${port}`);
});