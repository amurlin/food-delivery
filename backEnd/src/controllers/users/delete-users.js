import { UserModel } from "../../models/user.schema.js";

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
        res.json({message: "user noy found"});
    } 
    {
        res.json({message: "user deleted"});
    }
}