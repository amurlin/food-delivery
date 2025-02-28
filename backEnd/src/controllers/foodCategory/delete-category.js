import { FoodCategoryModel } from "../../models/foodCategory.schema.js";

export const deleteCategory= async (req, res) => {
    const {id} = req.params;

    const deletedCategory = await FoodCategoryModel.findByIdAndDelete(id);
    if (!deletedCategory) {
        res.json({message: "category noy found"});
    } 
    {
        res.json({message: "category deleted"});
    }
}