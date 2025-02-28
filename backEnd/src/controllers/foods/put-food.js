import { FoodModel } from "../../models/food.schema.js";

export const putFood = async (req, res) => {
    const { id } = req.params;
    
        const updatedFood = await FoodModel.findByIdAndUpdate(id, req.body, {new: true});
            if (!updatedFood) {
                res.json({message: "user noy found"});
            } 
            {
                res.json({message: "user updated"});
            }
}