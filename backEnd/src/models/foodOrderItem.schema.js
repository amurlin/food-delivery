import { Schema, model } from "mongoose";

const FoodOrderItemSchema = new Schema(
    {
        food: {type: Schema.Types.ObjectId, ref: "Foods"},
        quanity: {type: Number}
    }
);

export const FoodOrderItemModel = model.FoodOrderItemModel || model("foodCategory", FoodOrderItemSchema);

