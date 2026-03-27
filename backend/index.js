import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
import path from "path";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authroutes.js";
import userRouter from "./routes/userroutes.js";
import shopRouter from "./routes/shoproutes.js";
import itemRouter from "./routes/itemroutes.js";
import orderRouter from "./routes/orderroutes.js";
import http from "http";
const allowedOrigin = ["http://localhost:5173", "http://localhost:5174"];


import cors from "cors";
import { Server } from "socket.io";
import { socketHandler } from "./socket.js";


const app = express();
const port = process.env.PORT || 8000;
const server = http.createServer(app);

const io=new Server(server,{
  cors:{
    origin: allowedOrigin,
    credentials: true,
    methods:["POST","GET"],
  },
})

app.set("io", io);



app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  }),
);

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/shop", shopRouter);
app.use("/api/item", itemRouter);
app.use("/api/order", orderRouter);

socketHandler(io);

const NODE_ENV = process.env.NODE_ENV;
// make our app ready for deployment
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Serve SPA index for non-API routes.
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Vingo server is running");
});
server.listen(port, () => {
  connectDb();
  console.log(`Server is running on port: ${port}`);
});
