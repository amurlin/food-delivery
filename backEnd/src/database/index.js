import mongoose from "mongoose";

export const connectToDatabase = async() => {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("database connected");
}