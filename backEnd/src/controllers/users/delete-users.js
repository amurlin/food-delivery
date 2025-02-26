import { Users } from "../../models/user.schema.js";

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    const deletedUser = await Users.findByIdAndDelete(id);
    if (!deletedUser) {
        res.json({message: "user noy found"});
    } 
    {
        res.json({message: "user deleted"});
    }
}