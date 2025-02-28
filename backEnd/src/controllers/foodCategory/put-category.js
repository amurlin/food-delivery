import { FoodCategoryModel } from "../../models/foodCategory.schema.js";

export const putCategory = async (req, res) => {
    const { id } = req.params;

    const  updatedCategory = await FoodCategoryModel.findByIdAndUpdate(id, req.body, {new: true})

    res.json({message: "category updated"})
}