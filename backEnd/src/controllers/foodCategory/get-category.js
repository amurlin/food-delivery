import { FoodCategoryModel } from "../../models/foodCategory.schema.js"

export const getCategory = async (req, res) => {
    const allCategories = await FoodCategoryModel.find()
    res.json({message: "all categories:", allCategories})
}