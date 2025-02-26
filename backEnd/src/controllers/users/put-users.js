import { Users } from "../../models/user.schema.js";

export const putUser = async (req, res) => {
    const { id } = req.params;

    const updatedUser = await Users.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedUser) {
            res.json({message: "user noy found"});
        } 
        {
            res.json({message: "user updated"});
        }
}