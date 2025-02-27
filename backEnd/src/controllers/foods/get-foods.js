import { Foods } from "../../models/food.schema.js";

export const getFoods = async (req, res) => {
    const allFoods = await Foods.find()
    res.json({message: "all foods:", allFoods})
}