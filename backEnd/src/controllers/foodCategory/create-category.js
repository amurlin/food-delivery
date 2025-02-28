import { FoodCategoryModel } from "../../models/foodCategory.schema.js";

export const createCategory = async (req, res) => {
    const { categoryName } = req.body;
    const  newCategory = await FoodCategoryModel.create({categoryName});
    
    res.json({message: "Category created successfully!", newCategory});
}