import { UserModel } from "../../models/user.schema.js";

export const putUser = async (req, res) => {
    const { id } = req.params;

    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedUser) {
            res.json({message: "user noy found"});
        } 
        {
            res.json({message: "user updated"});
        }
}