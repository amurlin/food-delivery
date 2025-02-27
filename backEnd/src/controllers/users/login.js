import { UserModel } from "../../models/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({email});

        if (!user) return res.json({message: "Username or password did not match"});
        if (!bcrypt.compareSync(password, user.password)) return res.json({message: "Username or password did not match"});

        const token = jwt.sign({id: user._id, role: user.role}, 'secret')
        res.json({token: token})
    } catch (err) {
        res.status(403).json({ message: "Error occured" });
    }

}