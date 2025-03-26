import { FoodCategoryModel } from "../../models/foodCategory.schema.js";

export const createCategory = async (categoryName) => {
    const categoryExists = await FoodCategoryModel.findOne({ categoryName });

    if (!categoryExists) {
        const newCategory = await FoodCategoryModel.create({ categoryName });
        return newCategory;
    } else {
        return categoryExists;
    }
};
