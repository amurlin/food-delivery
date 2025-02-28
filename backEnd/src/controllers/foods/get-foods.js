import { FoodModel } from "../../models/food.schema.js";

export const getFoods = async (req, res) => {
    const allFoods = await FoodModel.find().populate(['category'])
    res.json({message: "all foods:", allFoods})
}