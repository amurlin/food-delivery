import { FoodModel } from "../../models/food.schema.js";

export const createFood = async (req, res) => {
    const { foodName, price, image, ingredients } = req.body;
    const  newFood = await FoodModel.create({foodName, price, image, ingredients});

    res.json({message: "Food created successfully!", newFood});
}
