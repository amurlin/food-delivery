import { FoodModel } from "../../models/food.schema.js";

export const deleteFood= async (req, res) => {
    const {id} = req.params;

    const deletedFood = await FoodModel.findByIdAndDelete(id);
    if (!deletedFood) {
        res.json({message: "food noy found"});
    } 
    {
        res.json({message: "food deleted"});
    }
}