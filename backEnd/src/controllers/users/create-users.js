import { Users } from "../../models/user.schema.js";

export const createUser = async (req, res) => {
    const {email, password} = req.body;
    const hashPassword = password + "0";

    const newUser = await Users.create({...req.body, password: hashPassword});

    res.json({message: "User crewated successfully!", newUser});
}