import mongoose from "mongoose";

const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to the Database");
    } catch (error) {
        console.log("Error in Database Connection" , error);
    }   
}

export default connectDb;