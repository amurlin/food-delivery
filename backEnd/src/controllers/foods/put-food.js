import { Foods } from "../../models/food.schema.js";

export const putFood = async (req, res) => {
    const { id } = req.params;
    
        const updatedFood = await Users.findByIdAndUpdate(id, req.body, {new: true});
            if (!updatedFood) {
                res.json({message: "user noy found"});
            } 
            {
                res.json({message: "user updated"});
            }
}