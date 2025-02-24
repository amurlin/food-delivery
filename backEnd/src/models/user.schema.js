import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:([String]),
});

export const Users = mongoose.model.Users || mongoose.model("Users", userSchema);