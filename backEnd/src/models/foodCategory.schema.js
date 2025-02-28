import { Schema, model } from "mongoose";

const foodCategorySchema = new Schema(
    {
        id: {type: Schema.Types.ObjectId},
        categoryName: {type: String, required: true},
        createdAt: { type: Date, default: new Date() },
        updatedAt: { type: Date, default: new Date() },
    }
);

export const FoodCategoryModel = model.FoodCategoryModel || model("foodCategory", foodCategorySchema);