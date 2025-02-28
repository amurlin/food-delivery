import { UserModel } from "../../models/user.schema.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    const {email, password} = req.body;
    //const hashPassword = password + "0";

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({email, password: encryptedPassword});

    res.json({message: "User created successfully!", newUser});
}